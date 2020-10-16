# Suggest a dram web scrapper main runner file
# Run this file to begin the scrape and save data to db

# Imports
import requests
from bs4 import BeautifulSoup

# Set count & other requirements

count_less_than = True
prepend_url = "https://www.thewhiskyexchange.com"


# Set main web url & request it
root_url = "https://www.thewhiskyexchange.com/brands/scotchwhisky"

root_result = requests.get(root_url, headers={'User-Agent': 'Mozilla/5.0'})

root_content = root_result.content


# Check if recieve appropriate response
if (root_result.status_code == 200):

    # Set BeautifulSoup object
    soup = BeautifulSoup(root_content, "html.parser")

    # Grab A-to-Z URLS
    atz_links = soup.findAll("a", class_="producers-link")

    # Get the four links to the whisky pages
    whisky_type_links = []
    
    for link in atz_links:
        whisky_type_links.append(link.attrs['href'])

    # Grab brand URLS

    brand_links = []
    
    for type_link in whisky_type_links:

        # Request page for each whisky type
        type_result = requests.get(f"{prepend_url}{type_link}", {'User-Agent': 'Mozilla/5.0'})
        type_content = type_result.content

        # Create BeautifulSoup object
        type_soup = BeautifulSoup(type_content, 'html.parser')
        
        # Grab each distillery/brand URLs
        individual_brand_links = type_soup.findAll("a", class_="az-item-link")
        for link in individual_brand_links:
            brand_links.append(link.attrs['href'])
    
    # print(brand_links)

    # Grab product URLS 
    product_links = []

    for brand_link in brand_links:

        count = 0

        # Request page for each brand
        brand_result = requests.get(f"{prepend_url}{brand_link}", {'User-Agent': 'Mozilla/5.0'})
        brand_content = brand_result.content

        # Create BeautifulSoup object
        brand_soup = BeautifulSoup(brand_content, 'html.parser')
        
        # Grab each individual whisky URLs
        individual_product_links = brand_soup.findAll("a", class_="product")

        for link in individual_product_links:
            if count < 2:
                product_links.append(link.attrs["href"])
                print(f"count: {count}")
                count += 1