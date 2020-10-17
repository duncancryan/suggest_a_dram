# Suggest a dram web scrapper main runner file
# Run this file to begin the scrape and save data to db

# Imports
import requests
from bs4 import BeautifulSoup
from pymongo import MongoClient
import pprint
client = MongoClient("localhost", 27017)
db = client.whisky_database
whiskies = db.whisky_collection
client.drop_database('whisky_database')


# Set count & other requirements

prepend_url = "https://www.thewhiskyexchange.com"


# Set main web url & request it
root_url = "https://www.thewhiskyexchange.com/brands/scotchwhisky"

root_result = requests.get(root_url, headers={"User-Agent": "Mozilla/5.0"})

root_content = root_result.content


# Check if recieve appropriate response
if (root_result.status_code == 200):

    # Set BeautifulSoup object
    soup = BeautifulSoup(root_content, "html.parser")

    # Grab A-to-Z URLS
    atz_links = soup.find_all("a", class_="producers-link")

    # Get the four links to the whisky pages
    whisky_type_links = []

    for link in atz_links:
        whisky_type_links.append(link.attrs["href"])

    # Grab brand URLS

    brand_links = []

    for type_link in whisky_type_links:

        # Request page for each whisky type
        type_result = requests.get(f"{prepend_url}{type_link}", {"User-Agent": "Mozilla/5.0"})
        type_content = type_result.content

        # Create BeautifulSoup object
        type_soup = BeautifulSoup(type_content, "html.parser")

        # Grab each distillery/brand URLs
        individual_brand_links = type_soup.find_all("a", class_="az-item-link")
        for link in individual_brand_links:
            brand_links.append(link.attrs["href"])

    # print(brand_links)

    # Grab product URLS
    product_links = []

    print("===========(URL retrieval phase)============")

    for brand_link in brand_links:

        count = 0

        # Request page for each brand
        brand_result = requests.get(f"{prepend_url}{brand_link}", {"User-Agent": "Mozilla/5.0"})
        brand_content = brand_result.content

        # Create BeautifulSoup object
        brand_soup = BeautifulSoup(brand_content, "html.parser")

        # Grab each individual whisky URLs
        individual_product_links = brand_soup.findAll("a", class_="product")

        # Grab the first whisky from each brand
        for link in individual_product_links:
            if count < 6:
                product_links.append(link.attrs["href"])
                print("getting data....")
                count += 1

        print(f"{brand_link} complete!")

        print("-----------------------")

    print("Retrieval complete!")
    print("")

    # Start data grab
    whisky = {
        "meta-data": {},
        "attributes": {}
    }

    print("===========(Build phase)============")
    print("")

    # Set some feedback variables
    saved_whisky_count = 0

    # Request page for each whisky
    for link in product_links:

        print("-----------------")
        print("")
        print(f"{prepend_url}{link} - URL")

        # Request page for each link
        whisky_result = requests.get(f"{prepend_url}{link}", {"User-Agent": "Mozilla/5.0"})

        # Set page content & parse
        whisky_content = whisky_result.content
        whisky_soup = BeautifulSoup(whisky_content, "html.parser")

        # Data functions

        # meta-data functions
        def setmdName():
            return whisky_soup.find("h1", class_="product-main__name").text.strip()

        def setmdPrice():
            return whisky_soup.find("p", class_="product-action__price").text.strip()

        def setmdAge():
            facts = whisky_soup.find_all("p", class_="product-facts__data")

            for fact in facts:
                if "Year Old" in fact.text:
                    return fact.text[0:2]

        def setmdPageMeta():
            pagemd = {
                "title": 'N/A',
                "description": 'N/A',
                "charset": 'N/A',
                "social_image": 'N/A'
            }

            # Metadata title
            if whisky_soup.title.string:
                pagemd["title"] = whisky_soup.title.string
            elif whisky_soup.find("meta", property="og:title"):
                pagemd["title"] = whisky_soup.find("meta", property="og:title").get("content")
            elif whisky_soup.find("meta", property="twitter:title"):
                pagemd["title"] = whisky_soup.find("meta", property="twitter:title").get("content")

            # Metadata description
            if whisky_soup.find("meta", property="description"):
                pagemd["description"] = whisky_soup.find("meta", property="description")
            elif whisky_soup.find("meta", property="og:description"):
                pagemd["description"] = whisky_soup.find("meta", property="description")

            # Charset (To ensure we know the correct charset if using other sites in future)
            if whisky_soup.find("meta", property="charset"):
                pagemd["charset"] = whisky_soup.find("meta", property="charset").get("content")

            # Social media image
            if whisky_soup.find("meta", property="og:image"):
                pagemd["social_image"] = whisky_soup.find("meta", property="og:image").get("content")
            elif whisky_soup.find("meta", property="twitter:image:src"):
                pagemd["social_image"] = whisky_soup.find("meta", property="twitter:image:src").get("content")

            return pagemd

        # Attribute functions
        # Gets the number rating for each whisky style

        def setattrRating():
            rating = whisky_soup.find("span", class_="review-overview__rating") 
            return rating.text.strip()


        def setattrBody():
            guage = whisky_soup.find_all("div", class_="flavour-profile__gauge")
            labels = whisky_soup.find_all("span", class_="flavour-profile__label")

            for label in labels:
                if "Body" in label.text:
                    index = labels.index(label)
                    return guage[index].attrs["data-text"]

        def setattrRichness():
            guage = whisky_soup.find_all("div", class_="flavour-profile__gauge")
            labels = whisky_soup.find_all("span", class_="flavour-profile__label")

            for label in labels:
                if "Richness" in label.text:
                    index = labels.index(label)
                    return guage[index].attrs["data-text"]

        def setattrSmoke():
            guage = whisky_soup.find_all("div", class_="flavour-profile__gauge")
            labels = whisky_soup.find_all("span", class_="flavour-profile__label")

            for label in labels:
                if "Smoke" in label.text:
                    index = labels.index(label)
                    return guage[index].attrs["data-text"]

        def setattrSweetness():
            guage = whisky_soup.find_all("div", class_="flavour-profile__gauge")
            labels = whisky_soup.find_all("span", class_="flavour-profile__label")

            for label in labels:
                if "Sweetness" in label.text:
                    index = labels.index(label) 
                    return guage[index].attrs["data-text"]
        
        # Captures each descriptive tag for the whisky
        def setAttrCharacter():
            character = []
            tags = whisky_soup.find_all("img", class_="flavour-profile__image")

            for tag in tags:
                character.append(tag.attrs["alt"])

            return character

        # Build & save data to db

        print("Building whisky...")

        # Checks for the flavour profile in each whisky
        if whisky_soup.find("div", class_="flavour-profile"):

            # Checks that they have both the style and character sections to describe the taste
            if whisky_soup.find("div", class_="flavour-profile__group--style") and whisky_soup.find("div", class_="flavour-profile__group--character"):

                    # Checks that there is a price
                    if whisky_soup.find("p", class_="product-action__price"):
                        
                        # Checks to see if rating exists
                        if whisky_soup.find("span", class_="review-overview__rating"):

                        # Sets the data for the whisky
                            whisky["meta-data"]["pagemd"] = setmdPageMeta()
                            whisky["meta-data"]["name"] = setmdName()
                            whisky["meta-data"]["age"] = setmdAge()
                            whisky["meta-data"]["price"] = setmdPrice()
                            whisky["attributes"]["rating"] = setattrRating()
                            whisky["attributes"]["body"] = setattrBody()
                            whisky["attributes"]["richness"] = setattrRichness()
                            whisky["attributes"]["smoke"] = setattrSmoke()
                            whisky["attributes"]["sweetness"] = setattrSweetness()
                            whisky["attributes"]["character"] = setAttrCharacter()

                            # Save whisky to database
                            whiskies.insert_one(whisky)

                            print(f"indexed...")

                            # Reset whiskey dictionary 
                            whisky = {
                            "meta-data": {},
                            "attributes": {}
                            }

                            saved_whisky_count += 1

                        else:
                            print("no rating, skipping...")
                    
                    else:
                        print("No price, skipping...")
                        pass

            else:
                print("Missing a set of attributes, skipping...")
                pass

        else:
            print("Missing all attributes, skipping...")
            pass


        # if whisky_count > 1:
        #     break


    print(f"Scrape done! {saved_whisky_count} pages scraped and saved...")