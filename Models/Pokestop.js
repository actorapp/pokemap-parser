'use strict'

class Pokestop {
   /**
    *
    * @param {boolean} enabled
    * @param {number} lastModified
    * @param {number} latitude
    * @param {number} longitude
    * @param {string} pokestopId
    * @param {*} activePokemonId
    * @param {*} lureExpiration
   */
   constructor(
     enabled, 
     lastModified, 
     latitude, 
     longitude, 
     pokestopId, 
     activePokemonId, 
     lureExpiration
   ) {
       this._enabled = enabled
       this._lastModified = lastModified
       this._latitude = latitude
       this._longitude = longitude
       this._pokestopId = pokestopId
       this._activePokemonId = activePokemonId
       this._lureExpiration = lureExpiration
   }

   /**
    * 
    * @returns {boolean}
   */
   get enabled() {
       return this._enabled
   }

   /**
    * 
    * @returns {number}
   */
   get lastModified() {
       return this._lastModified
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
    * @returns {string}
   */
   get pokestopId() {
       return this._pokestopId
   }

   /**
    * 
    * @returns {*}
   */
   get activePokemonId() {
       return this._activePokemonId
   }

   /**
    * 
    * @returns {*}
   */
   get lureExpiration() {
       return this._lureExpiration
   }

   /**
    *
    * @param {Object} raw
    * @returns {Pokestop}
    */
   static deserialize(raw) {
      return new Pokestop(
          raw['enabled'], 
          raw['last_modified'], 
          raw['latitude'], 
          raw['longitude'], 
          raw['pokestop_id'], 
          raw['active_pokemon_id'],
          raw['lure_expiration']
      )
   }

   /**
    *
    * @returns {Object}
    */
   serialize() {
      return { 
          enabled: this.enabled ? this.enabled : undefined, 
          last_modified: this.lastModified ? this.lastModified : undefined, 
          latitude: this.latitude ? this.latitude : undefined, 
          longitude: this.longitude ? this.longitude : undefined, 
          pokestop_id: this.pokestopId ? this.pokestopId : undefined, 
          active_pokemon_id: this.activePokemonId ? this.activePokemonId : undefined, 
          lure_expiration: this.lureExpiration ? this.lureExpiration : undefined
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

module.exports = Pokestop