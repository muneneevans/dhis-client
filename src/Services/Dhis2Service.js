export default class Dhis2Service {

    static getUserInformation(credentials) {
        const url = 'http://test.hiskenya.org/api/26/me'
        const parsedCredentials = credentials.username + ':' + credentials.password
        const encodedCredentials = btoa(parsedCredentials);
        console.log(encodedCredentials)
        const request = {
            method: "GET",
            headers: {                
                'Authorization': 'Basic ' + encodedCredentials
            },
        };


        return fetch(url, request)
            .then(response => {                
                console.log(response)
                if (response.status != 200) {

                }
                return response.json()
            })
            .catch(error => {
                return error
            })
    }

    static getNewToken(credentials){
        
    }
    
}