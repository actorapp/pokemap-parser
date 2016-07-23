'use strict'

const Gym = require('./Gym')
const Pokemon = require('./Pokemon')
const Scanned = require('./Scanned')
const Pokestop = require('./Pokestop')

class RootObject {
   /**
    *
    * @param {Gym[]} gyms
    * @param {Pokemon[]} pokemons
    * @param {Scanned[]} scanned
    * @param {Pokestop[]} pokestops
   */
   constructor(gyms, pokemons, scanned, pokestops) {
       this._gyms = gyms
       this._pokemons = pokemons
       this._scanned = scanned
       this._pokestops = pokestops
   }

   /**
    * 
    * @returns {Gym[]}
   */
   get gyms() {
       return this._gyms
   }

   /**
    * 
    * @returns {Pokemon[]}
   */
   get pokemons() {
       return this._pokemons
   }

   /**
    * 
    * @returns {Scanned[]}
   */
   get scanned() {
       return this._scanned
   }

    /**
     *
     * @returns {Pokestop[]}
     */
    get pokestops() {
        return this._pokestops
    }

   /**
    *
    * @param {Object} raw
    * @returns {RootObject}
    */
   static deserialize(raw) {
       return new RootObject(raw['gyms'] ? raw['gyms'].map(item => Gym.deserialize(item)) : null, raw['pokemons'] ? raw['pokemons'].map(item => Pokemon.deserialize(item)) : null, raw['scanned'] ? raw['scanned'].map(item => Scanned.deserialize(item)) : null, raw['pokestops'] ? raw['pokestops'].map(item => Pokestop.deserialize(item)) : null)
   }

   /**
    *
    * @returns {Object}
    */
   serialize() {
      return { 
          gyms: this.gyms ? this.gyms : undefined, 
          pokemons: this.pokemons ? this.pokemons : undefined, 
          scanned: this.scanned ? this.scanned : undefined,
          pokestops: this.pokestops ? this.pokestops : undefined
      }
   }

   /**
    *
    * @returns {string}
    */
   toJSON() {
      return this.serialize()
   }
}

module.exports = RootObject