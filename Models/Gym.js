'use strict'

class Gym {
   /**
    *
    * @param {boolean} enabled
    * @param {number} guardPokemonId
    * @param {string} gymId
    * @param {number} gymPoints
    * @param {number} lastModified
    * @param {number} latitude
    * @param {number} longitude
    * @param {number} teamId
   */
   constructor(
     enabled, 
     guardPokemonId, 
     gymId, 
     gymPoints, 
     lastModified, 
     latitude, 
     longitude, 
     teamId
   ) {
       this._enabled = enabled
       this._guardPokemonId = guardPokemonId
       this._gymId = gymId
       this._gymPoints = gymPoints
       this._lastModified = lastModified
       this._latitude = latitude
       this._longitude = longitude
       this._teamId = teamId
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
   get guardPokemonId() {
       return this._guardPokemonId
   }

   /**
    * 
    * @returns {string}
   */
   get gymId() {
       return this._gymId
   }

   /**
    * 
    * @returns {number}
   */
   get gymPoints() {
       return this._gymPoints
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
    * @returns {number}
   */
   get teamId() {
       return this._teamId
   }

   /**
    *
    * @param {Object} raw
    * @returns {Gym}
    */
   static deserialize(raw) {
      return new Gym(
          raw['enabled'], 
          raw['guard_pokemon_id'], 
          raw['gym_id'], 
          raw['gym_points'], 
          raw['last_modified'], 
          raw['latitude'], 
          raw['longitude'], 
          raw['team_id']
      )
   }

   /**
    *
    * @returns {Object}
    */
   serialize() {
      return { 
          enabled: this.enabled ? this.enabled : undefined, 
          guard_pokemon_id: this.guardPokemonId ? this.guardPokemonId : undefined, 
          gym_id: this.gymId ? this.gymId : undefined, 
          gym_points: this.gymPoints ? this.gymPoints : undefined, 
          last_modified: this.lastModified ? this.lastModified : undefined, 
          latitude: this.latitude ? this.latitude : undefined, 
          longitude: this.longitude ? this.longitude : undefined, 
          team_id: this.teamId ? this.teamId : undefined
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

module.exports = Gym