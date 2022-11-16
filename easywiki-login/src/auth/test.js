import React, {useState} from 'react';
import axios from 'axios';

export const Tester = () => {

let url = "https://test.wikipedia.org/w/api.php";



function getLoginToken() {
    
    let params = {
        action: "query",
        meta: "tokens",
        type: "login",
        format: "json"
    };
    
    fetch( { url: url, method: 'GET', qs: params }, function( error, response, body ){
    let data;
    data = JSON.parse( body );
    loginRequest( data.query.tokens.logintoken )
    });
}

function loginRequest(loginToken) { 
    var params2 = {
		action: 'login',
		lgname: 'Andrisgombos@botjelszo',
		lgpassword: 'uaqnn0ee1fcoje7ju0jvk5oomugujnkf',
		lgtoken: loginToken,
		format: 'json'
    };

    const postlogin = fetch( { url: url, method: 'POST', form: params2 }, function ( error, res, body ) {
        if ( error ) { return 
        }
        console.log( body );
	    });
    }
    getLoginToken();
}