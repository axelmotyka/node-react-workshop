import { resolve } from 'path';
import { rejects } from 'assert';
var requestp = require('request-promise');

class RecordsApi {
    static get(url) {
        return {
            method: 'GET',
            uri: url,
            headers: {
                //'Access-Control-Allow-Origin':'http://localhost:3000',
                'Content-Type': 'application/json'
            },
            json: true // Automatically parses the JSON string in the response
        };
    }

    static getRecords() {
        //const opt = this.get("/api/dev/v1/database/select");

        return requestp(this.get("http://localhost:3000/api/dev/v1/database/select"))
        .then(function (response) {
            console.log(response);
            resolve(response);
        })
        .catch(function (err) {
            console.error(err)
            rejects(err);
        });
    }
}

export default RecordsApi