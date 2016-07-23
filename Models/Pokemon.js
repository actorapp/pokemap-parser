'use strict'

class Pokemon {
   /**
    *
    * @param {number} disappearTime
    * @param {string} encounterId
    * @param {number} latitude
    * @param {number} longitude
    * @param {number} pokemonId
    * @param {string} pokemonName
    * @param {string} spawnpointId
   */
   constructor(
     disappearTime, 
     encounterId, 
     latitude, 
     longitude, 
     pokemonId, 
     pokemonName, 
     spawnpointId
   ) {
       this._disappearTime = disappearTime
       this._encounterId = encounterId
       this._latitude = latitude
       this._longitude = longitude
       this._pokemonId = pokemonId
       this._pokemonName = pokemonName
       this._spawnpointId = spawnpointId
   }

   /**
    * 
    * @returns {number}
   */
   get disappearTime() {
       return this._disappearTime
   }

   /**
    * 
    * @returns {string}
   */
   get encounterId() {
       return this._encounterId
   }

   /**
    * 
    * @returns {number}
   */
   get latitude() {
       return this._latitude
   }

   /**
    * 
    * @returns {number}
   */
   get longitude() {
       return this._longitude
   }

   /**
    * 
    * @returns {number}
   */
   get pokemonId() {
       return this._pokemonId
   }

   /**
    * 
    * @returns {string}
   */
   get pokemonName() {
       return this._pokemonName
   }

   /**
    * 
    * @returns {string}
   */
   get spawnpointId() {
       return this._spawnpointId
   }

   /**
    *
    * @param {Object} raw
    * @returns {Pokemon}
    */
   static deserialize(raw) {
      return new Pokemon(
          raw['disappear_time'], 
          raw['encounter_id'], 
          raw['latitude'], 
          raw['longitude'], 
          raw['pokemon_id'], 
          raw['pokemon_name'], 
          raw['spawnpoint_id']
      )
   }

   /**
    *
    * @returns {Object}
    */
   serialize() {
      return { 
          disappear_time: this.disappearTime ? this.disappearTime : undefined, 
          encounter_id: this.encounterId ? this.encounterId : undefined, 
          latitude: this.latitude ? this.latitude : undefined, 
          longitude: this.longitude ? this.longitude : undefined, 
          pokemon_id: this.pokemonId ? this.pokemonId : undefined, 
          pokemon_name: this.pokemonName ? this.pokemonName : undefined, 
          spawnpoint_id: this.spawnpointId ? this.spawnpointId : undefined
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

module.exports = Pokemon