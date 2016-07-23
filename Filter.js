'use strict'

const DataLoader = require('./DataLoader')

class Filter {
    /**
     * @param {RootObject} data
     */
    constructor(data) {
        this._data = data
    }

    /**
     * @returns {RootObject}
     */
    get data() {
        return this._data
    }

    /**
     * @param {RootObject} newData
     */
    set data(newData) {
        this._data = newData
    }

    /**
     *
     * @param {Number} lat
     * @param {Number} long
     * @param {Number} radius
     * @returns {Pokemon[]}
     */
    getPokemonsNerby(lat, long, radius) {
        let results = []
        
        this._data.pokemons.forEach(pokemon => {
            if (this._getDistanceFromLatLonInKm(lat, long, pokemon.latitude, pokemon.longitude) <= radius) 
                results.push(pokemon)
        })
        
        return results
    }

    /**
     * @param {Number} topLat
     * @param {Number} topLong
     * @param {Number} bottomLat
     * @param {Number} bottomLong
     * @returns {Array}
     */
    getPokemonsInRect(topLat, topLong, bottomLat, bottomLong) {
        let results = []

        this._data.pokemons.forEach(pokemon => {
            if (pokemon.latitude >= topLat && pokemon.latitude <= bottomLat &&
                pokemon.longitude >= topLong && pokemon.longitude <= bottomLong
            )
                results.push(pokemon)
        })

        return results
    }

    _getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
        var R = 6371 // Radius of the earth in km
        var dLat = this._deg2rad(lat2-lat1)  // deg2rad below
        var dLon = this._deg2rad(lon2-lon1)
        var a =
                Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(this._deg2rad(lat1)) * Math.cos(this._deg2rad(lat2)) *
                Math.sin(dLon/2) * Math.sin(dLon/2)
            
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
        var d = R * c // Distance in km
        return d
    }

    _deg2rad(deg) {
        return deg * (Math.PI/180)
    }

}

module.exports = Filter