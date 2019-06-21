import { Component } from 'react'

export default class API extends Component{

    static apiGetDog() {      
    const apiURL = 'https://fierce-bayou-88462.herokuapp.com/api/dog';
    // const queryString = this.formatQueryParams(data);
        const url = apiURL;

        const options = {
        method: 'GET',
        headers: {
            
            "Content-Type": "application/json"
        }
        };

    return fetch(url, options)
    }

    static apiGetCat() {      
        const apiURL = 'https://whispering-tundra-15220.herokuapp.com/stats';
        // const queryString = this.formatQueryParams(data);
            const url = apiURL;
    
            const options = {
            method: 'GET',
            headers: {
                
                "Content-Type": "application/json"
            }
            };
    
        return fetch(url, options)
        }

    static apiDeleteDog(trail) {
        const apiURL = 'https://fierce-bayou-88462.herokuapp.com/api/dog';
        const options = {
            method: 'DELETE',
            body: JSON.stringify(trail),
            headers: {
                'content-type':'application/json',
            }
        };
        // console.log(options.body)
        return fetch(apiURL, options)
    }

    static apiDeleteCat(trail) {
        const apiURL = 'https://whispering-tundra-15220.herokuapp.com/stats';
        const options = {
            method: 'DELETE',
            body: JSON.stringify(trail),
            headers: {
                'content-type':'application/json',
            }
        };
        // console.log(options.body)
        return fetch(apiURL, options)
    }
}