# Suggest a dram web scrapper main runner file
# Run this file to begin the scrape and save data to db

# Imports
import requests
from bs4 import BeautifulSoup

# Set main web url & request it
root_url = "https://www.thewhiskyexchange.com/c/40/single-malt-scotch-whisky"

root_result = requests.get(root_url)

root_content = root_result.content

# Check if recieve appropriate response
if (root_result.status_code == 200):

    # Set BeautifulSoup object
    soup = BeautifulSoup(root_content, "html.parser")

    # Grab all URLs for whiskies
    whisky_urls = []

    whisky_anchors = soup.findAll("a", class_="product")

    for anchor in whisky_anchors:
        whisky_urls.append(anchor.attrs["href"])

    print(whisky_urls)