# Suggest a dram web scrapper main runner file
# Run this file to begin the scrape and save data to db

# Imports
import requests
from bs4 import BeautifulSoup
from pymongo import MongoClient
import pprint
import ws_functions as wsfunctions
import ws_scoregen as scoregen

# Set count & other requirements


prepend_url = "https://www.thewhiskyexchange.com"

client = MongoClient("localhost", 27017)
db = client.whisky_database
whiskies = db.whisky_collection
client.drop_database('whisky_database')


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
            if count < 60:
                product_links.append(link.attrs["href"])
                print("getting data....")
                count += 1

        print(f"{brand_link} complete!")

        print("-----------------------")

    print("Retrieval complete!")
    print("")

    # Start data grab

    print("===========(Build phase)============")
    print("")

    # Set some feedback variables
    saved_whisky_count = 0

    # Request page for each whisky
    for link in product_links:

        print("-----------------")
        print("")

        whisky = {
            "meta-data": {},
            "attributes": {}
        }

        print(f"{prepend_url}{link} - URL")

        # Request page for each link
        whisky_result = requests.get(f"{prepend_url}{link}", {"User-Agent": "Mozilla/5.0"})

        # Set page content & parse
        whisky_content = whisky_result.content
        whisky_soup = BeautifulSoup(whisky_content, "html.parser")

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

                            # Set the data for the whisky
                            whisky["meta-data"]["pagemd"] = wsfunctions.setmdPageMeta(whisky_soup)
                            whisky["meta-data"]["name"] = wsfunctions.setmdName(whisky_soup)
                            whisky["meta-data"]["age"] = wsfunctions.setmdAge(whisky_soup)
                            whisky["meta-data"]["price"] = wsfunctions.setmdPrice(whisky_soup)
                            whisky["attributes"]["rating"] = wsfunctions.setattrRating(whisky_soup)
                            whisky["attributes"]["body"] = wsfunctions.setattrBody(whisky_soup)
                            whisky["attributes"]["richness"] = wsfunctions.setattrRichness(whisky_soup)
                            whisky["attributes"]["smoke"] = wsfunctions.setattrSmoke(whisky_soup)
                            whisky["attributes"]["sweetness"] = wsfunctions.setattrSweetness(whisky_soup)
                            whisky["attributes"]["character"] = wsfunctions.setAttrCharacter(whisky_soup)

                            # Run score calc and add to whisky

                            whisky['attributes']['element_score'] = scoregen.element_generator(whisky['attributes'])
                            whisky['attributes']['fruit_score'] = scoregen.fruit_generator(whisky['attributes'])
                            whisky['attributes']['spice_score'] = scoregen.spice_generator(whisky['attributes'])
                            whisky['attributes']['confectionery_score'] = scoregen.confectionery_generator(whisky['attributes'])
                            whisky['attributes']['floral_score'] = scoregen.floral_generator(whisky['attributes'])
                            whisky['attributes']['fatty_score'] = scoregen.fatty_generator(whisky['attributes'])

                            # Save whisky to database
                            whiskies.insert_one(whisky)

                            print(f"indexed...")

                            saved_whisky_count += 1

                        else:
                            print("no rating, skipping...")
                            pass
                    
                    else:
                        print("No price, skipping...")
                        pass

            else:
                print("Missing a set of attributes, skipping...")
                pass

        else:
            print("Missing all attributes, skipping...")
            pass


    print(f"Scrape done! {saved_whisky_count} pages scraped and saved...")