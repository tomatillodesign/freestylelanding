import React, { Component } from 'react';
import './App.css';

var WPAPI = require( 'wpapi' );
var wp = new WPAPI({ endpoint: 'https://freestyleadventuretravel.com/wp-json/wp/v2/trips?embed' });

class Trips extends Component {
    constructor() {
        super();

        this.state = {
             trips: [],
             test: false,
        }

        // Magical bind method here
        // this.getTrips = this.getTrips.bind(this);
        // this.mapPosts = this.mapPosts.bind(this);

    }


    // NOT working
    // Try to copy the code from CARDS.js

    componentDidMount(){
         //Promises
        wp.posts().then(function( data ) {

            // do something with the returned posts
            //console.log('SUCCESS');
            //console.log(data);

            // Loop thru all returned posts and add them each to state

            this.setState({
                 trips: data[0]
             });

        }).catch(function( err ) {
            // handle error
            //console.log('ERROR');
        });


        this.setState({
             test: true
         });

    }



    render() {

         //console.log('RENDER STATE: ' + this.state.trips);

         // Loop through state and render all posts onto the page

        return (
            <div>
               <h2>TEST: {this.state.test.toString()}</h2>
               <h2>{this.state.trips}</h2>
            </div>
        );
    }
}


export default Trips;
