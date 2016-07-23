'use strict'

const req = require('tiny_request')
const RootObject = require('./Models/RootObject')

const DATA_URL = 'http://map.poketalk.im/raw_data'
const DATA_PORT = 9090

class DataLoader {
    /**
     * @returns {Promise<RootObject>}
     */
    static loadData() {
        return new Promise((resolve, reject) => {
            req.get({
                url: DATA_URL,
                port: DATA_PORT,
                json: true,
                query: {
                    pokemon: true,
                    pokestops: true,
                    gyms: true,
                    scanned: true
                }
            }, (body, response, err) => {
                if (!err && response.statusCode == 200) { 
                    resolve(RootObject.deserialize(body))
                    return
                }

                reject(err)
            })
        })
    }
}

module.exports = DataLoader