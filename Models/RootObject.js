'use strict'

const Gym = require('./Gym')
const Pokemon = require('./Pokemon')
const Scanned = require('./Scanned')

class RootObject {
   /**
    *
    * @param {Gym[]} gyms
    * @param {Pokemon[]} pokemons
    * @param {Scanned[]} scanned
   */
   constructor(gyms, pokemons, scanned) {
       this._gyms = gyms
       this._pokemons = pokemons
       this._scanned = scanned
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
    * @param {Object} raw
    * @returns {RootObject}
    */
   static deserialize(raw) {
      return new RootObject(raw['gyms'] ? raw['gyms'].map(item => Gym.deserialize(item)) : null, raw['pokemons'] ? raw['pokemons'].map(item => Pokemon.deserialize(item)) : null, raw['scanned'] ? raw['scanned'].map(item => Scanned.deserialize(item)) : null)
   }

   /**
    *
    * @returns {Object}
    */
   serialize() {
      return { 
          gyms: this.gyms ? this.gyms : undefined, 
          pokemons: this.pokemons ? this.pokemons : undefined, 
          scanned: this.scanned ? this.scanned : undefined
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