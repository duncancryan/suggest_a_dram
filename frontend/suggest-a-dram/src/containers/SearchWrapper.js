// Imports
import { Typography, Paper } from '@material-ui/core';
import React, {Component} from 'react';
import SearchBar from '../components/SearchBar';
import WhiskyItem from '../components/WhiskyItem';

export default class ResultWrapper extends Component {

    // Constructor
    constructor(props) {

        // Super
        super(props);

        // State
        this.state = {
            whiskies: [{"_id":{"$oid":"5f8c61612f77cb049a5184d6"},"meta-data":{"pagemd":{"page-title":"Aberfeldy 12 Year Old Scotch Whisky : The Whisky Exchange","page-description":"A fruity, clean and polished malt with a touch of honey and spice, Aberfeldy 12 Year Old is an excellent introduction to this Highland distillery. Aberfeldy's main claim to fame is as the heart of ...","product-image":"https://img.thewhiskyexchange.com/540/abfob.12yov1.jpg","product-url":"https://www.thewhiskyexchange.com/p/5850/aberfeldy-12-year-old"},"name":"Aberfeldy 12 Year Old","age":"12","price":"£37.95"},"attributes":{"rating":"4.5","body":"3","richness":"3","smoke":"0","sweetness":"3","character":["Nutmeg","Apple","Melon","Honey "],"score":13}},
            {"_id":{"$oid":"5f8c61622f77cb049a5184d7"},"meta-data":{"pagemd":{"page-title":"Aberlour 10 Year Old Scotch Whisky : The Whisky Exchange","page-description":"Aberlour 10yo is a great entry-level malt, ideal for beginners, with a fine sherried spiciness.  Pound for pound, this is one of the best that Speyside has to offer.","product-image":"https://img.thewhiskyexchange.com/540/ablob.10yo.jpg","product-url":"https://www.thewhiskyexchange.com/p/140/aberlour-10-year-old"},"name":"Aberlour 10 Year Old","age":"10","price":"£34.95"},"attributes":{"rating":"4","body":"3","richness":"3","smoke":"0","sweetness":"4","character":["Cinnamon","Raisins ","Honey ","Malt"],"score":14}},
            {"_id":{"$oid":"5f8c616a2f77cb049a5184e3"},"meta-data":{"pagemd":{"page-title":"Ardbeg Corryvreckan Scotch Whisky : The Whisky Exchange","page-description":"As a replacement for the much-loved 1990 Airigh nam Beist, Ardbeg Corryvreckan had some pretty big shoes to fill, but the good news is that this is a belter, winning World's Best Single Malt Whisky...","product-image":"https://img.thewhiskyexchange.com/540/abgob.non7.jpg","product-url":"https://www.thewhiskyexchange.com/p/10767/ardbeg-corryvreckan"},"name":"Ardbeg Corryvreckan","age":null,"price":"£67.95"},"attributes":{"rating":"5","body":"4","richness":"5","smoke":"4","sweetness":"2","character":["White Pepper","Anise (star)","Cherry","Smoke","Coffee","Meat"],"score":21}},
            {"_id":{"$oid":"5f8c61612f77cb049a5184d6"},"meta-data":{"pagemd":{"page-title":"Aberfeldy 12 Year Old Scotch Whisky : The Whisky Exchange","page-description":"A fruity, clean and polished malt with a touch of honey and spice, Aberfeldy 12 Year Old is an excellent introduction to this Highland distillery. Aberfeldy's main claim to fame is as the heart of ...","product-image":"https://img.thewhiskyexchange.com/540/abfob.12yov1.jpg","product-url":"https://www.thewhiskyexchange.com/p/5850/aberfeldy-12-year-old"},"name":"Aberfeldy 12 Year Old","age":"12","price":"£37.95"},"attributes":{"rating":"4.5","body":"3","richness":"3","smoke":"0","sweetness":"3","character":["Nutmeg","Apple","Melon","Honey "],"score":13}},
            {"_id":{"$oid":"5f8c61622f77cb049a5184d7"},"meta-data":{"pagemd":{"page-title":"Aberlour 10 Year Old Scotch Whisky : The Whisky Exchange","page-description":"Aberlour 10yo is a great entry-level malt, ideal for beginners, with a fine sherried spiciness.  Pound for pound, this is one of the best that Speyside has to offer.","product-image":"https://img.thewhiskyexchange.com/540/ablob.10yo.jpg","product-url":"https://www.thewhiskyexchange.com/p/140/aberlour-10-year-old"},"name":"Aberlour 10 Year Old","age":"10","price":"£34.95"},"attributes":{"rating":"4","body":"3","richness":"3","smoke":"0","sweetness":"4","character":["Cinnamon","Raisins ","Honey ","Malt"],"score":14}},
            {"_id":{"$oid":"5f8c616a2f77cb049a5184e3"},"meta-data":{"pagemd":{"page-title":"Ardbeg Corryvreckan Scotch Whisky : The Whisky Exchange","page-description":"As a replacement for the much-loved 1990 Airigh nam Beist, Ardbeg Corryvreckan had some pretty big shoes to fill, but the good news is that this is a belter, winning World's Best Single Malt Whisky...","product-image":"https://img.thewhiskyexchange.com/540/abgob.non7.jpg","product-url":"https://www.thewhiskyexchange.com/p/10767/ardbeg-corryvreckan"},"name":"Ardbeg Corryvreckan","age":null,"price":"£67.95"},"attributes":{"rating":"5","body":"4","richness":"5","smoke":"4","sweetness":"2","character":["White Pepper","Anise (star)","Cherry","Smoke","Coffee","Meat"],"score":21}}
        ]
        }

    }

    // Methods

    // Render
    render() {

        const whiskies = this.state.whiskies.map(whisky => {
            return <WhiskyItem whisky={whisky} />
        })

        return(
            <div className="result-wrapper">
                
                <Paper>

                    <div className="result-content">

                        <Typography variant="h2">All Whiskies</Typography>

                        <div className="results-search-area">

                            <SearchBar />

                        </div>

                        <div className="results-whisky-wrapper">
                        
                            {whiskies}

                        </div>

                    </div>

                </Paper>

            </div>
        );
    }

}