// Imports
import React, {Component} from 'react';

export default class ResultWrapper extends Component {

    // Constructor
    constructor(props) {

        // Super
        super(props);

        // State
        this.state = {
            whiskies: [{
                "_id":{"$oid":"5f8b17ea0090132b0f159093"},
                "meta-data":{
                    "pagemd":{
                        "page-title":"Aberfeldy 12 Year Old Scotch Whisky : The Whisky Exchange",
                        "page-description":"A fruity, clean and polished malt with a touch of honey and spice, Aberfeldy 12 Year Old is an excellent introduction to this Highland distillery. Aberfeldy's main claim to fame is as the heart of ...",
                        "product-image":"https://img.thewhiskyexchange.com/540/abfob.12yov1.jpg",
                        "product-url":"https://www.thewhiskyexchange.com/p/5850/aberfeldy-12-year-old"
                    },
                    "name":"Aberfeldy 12 Year Old","age":"12","price":"£37.95"},
                    "attributes":{
                        "rating":"4.5",
                        "body":"3",
                        "richness":0,
                        "smoke":0,
                        "sweetness":0,
                        "character":["Nutmeg","Apple","Melon","Honey "],
                        "score":7
                    }
                }]
        }

    }

    // Methods

    // Render
    render() {
        return(
            <p>Result Wrapper</p>
        );
    }

}