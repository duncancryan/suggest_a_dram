# Suggest-A-Dram
Hosted at https://www.suggestadram.com/

This is a group project for CodeClan, it will utilize Python and JavaScript to build a web scraper and Web App that will allow a user to answer some quick questions about their tastes and then recommend a whiskey based on their response.

The app will be geared towards beginners in whisky to help them find good products to try. 

## Frameworks

The project will use the following frameworks for the respective languages.

Python:
- BeautifulSoup - [more info](https://www.crummy.com/software/BeautifulSoup/ "BeautifulSoup")

JavaScript:
- react.js - [more info](https://reactjs.org "react.js")
- material-ui (react.js UI framwork) - [more info](https://material-ui.com "Material UI")


## Goals

### MVP

1. Use BeautifulSoup to scrape web for whisky data. ([The Whisky Exchange](https://thewhiskyexchange.com) for data)

2. Extract appropriate data for the system and save to a noSQL db. (Details like whisky name, age, producer, flavours, etc..)

3. Build a matching system to compare user input with sorted whisky to provide most accurate results. (User input will come from front end, possibly save input to db?)

4. Build React front end to allow for user input and displaying of suggested whisky

5. Build front end using material react components.

### Extensions

1. Add search feature where a User can search by tasting note

2. User accounts/authentication to allow for users to save suggestions/provide reviews or feedback

3. Consider implementing ML capabilities to better sort and rank data and to better match user input with ranked data
