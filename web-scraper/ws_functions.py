# This is the data grabbing functions for the web scraper, broken out from the main runner file
# to help with size and readability

# Meta-data functions

def setmdName(page):

    # Grab whisky name -->
    if page.find("h1", class_="product-main__name"):
        # If can find <h1> tag use that for title
        return page.find("h1", class_="product-main__name").text.strip()

    elif page.title.string:
        # If cant find <h1> use page title
        return page.title.string

#==========#

def setmdPageMeta(page):

    # Grab website page metadata -->

    # Create object, set N/A incase none found
    pagemd = {
        "page-title": 'N/A',
        "page-description": 'N/A',
        "product-image": 'N/A',
        "product-url": "N/A"
    }

    # Grab meta title -->
    if page.title.string:
        pagemd["page-title"] = page.title.string
    elif page.find("meta", property="og:title"):
        pagemd["page-title"] = page.find("meta", property="og:title").get("content")
    elif page.find("meta", property="twitter:title"):
        pagemd["page-title"] = page.find("meta", property="twitter:title").get("content")

    # Grab meta description -->
    if page.find("meta", property="description"):
        pagemd["page-description"] = page.find("meta", property="description").attrs("content")
    elif page.find("meta", property="og:description"):
        pagemd["page-description"] = page.find("meta", property="og:description").get("content")

    # Grab product image url -->
    if page.find("meta", property="og:image"):
        pagemd["product-image"] = page.find("meta", property="og:image").get("content")
    elif page.find("meta", property="twitter:image:src"):
        pagemd["product-image"] = page.find("meta", property="twitter:image:src").get("content")

    # Grab page url -->
    if page.find("meta", property="og:url"):
        pagemd["product-url"] = page.find("meta", property="og:url").get("content")

    return pagemd

#==========#

def setmdPrice(page):
    # Grab product price -->
    return page.find("p", class_="product-action__price").text.strip()

#==========#

def setmdAge(page):
    # Grab product age -->

    # Find all fact items
    facts = page.find_all("p", class_="product-facts__data")

    # Loop through facts and find age
    for fact in facts:
        if "Year Old" in fact.text:
            return fact.text[0:2]

#==========#

def setattrRating(page):
    # Grab product star rating -->
    rating = page.find("span", class_="review-overview__rating") 
    return rating.text.strip()

#==========#

def setattrBody(page):
    # Get product body attribute -->

    guage = page.find_all("div", class_="flavour-profile__gauge")
    labels = page.find_all("span", class_="flavour-profile__label")

    for label in labels:
        if "Body" in label.text:
            index = labels.index(label)
            return guage[index].attrs["data-text"]

    return 0

#==========#

def setattrRichness(page):
    # Grab prodcut richness attribute -->

    guage = page.find_all("div", class_="flavour-profile__gauge")
    labels = page.find_all("span", class_="flavour-profile__label")

    for label in labels:
        if "Richness" in label.text:
            index = labels.index(label)
            return guage[index].attrs["data-text"]

    return 0

#==========#

def setattrSmoke(page):
    # Grab prodcut smoke attribute -->

    guage = page.find_all("div", class_="flavour-profile__gauge")
    labels = page.find_all("span", class_="flavour-profile__label")

    for label in labels:
        if "Smoke" in label.text:
            index = labels.index(label)
            return guage[index].attrs["data-text"]

    return 0

#==========#

def setattrSweetness(page):
    # Grab prodcut sweetness attribute -->

    guage = page.find_all("div", class_="flavour-profile__gauge")
    labels = page.find_all("span", class_="flavour-profile__label")

    for label in labels:
        if "Sweetness" in label.text:
            index = labels.index(label) 
            return guage[index].attrs["data-text"]

    return 0

#==========#

def setAttrCharacter(page):
    # Grab all the tags for the product

    character = []
    tags = page.find_all("img", class_="flavour-profile__image")

    for tag in tags:
        character.append(tag.attrs["alt"])

    return character

#==========#