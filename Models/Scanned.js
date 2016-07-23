'use strict'

class Scanned {
   /**
    *
    * @param {number} lastModified
    * @param {number} latitude
    * @param {number} longitude
    * @param {string} scannedId
   */
   constructor(lastModified, latitude, longitude, scannedId) {
       this._lastModified = lastModified
       this._latitude = latitude
       this._longitude = longitude
       this._scannedId = scannedId
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
   get scannedId() {
       return this._scannedId
   }

   /**
    *
    * @param {Object} raw
    * @returns {Scanned}
    */
   static deserialize(raw) {
      return new Scanned(raw['last_modified'], raw['latitude'], raw['longitude'], raw['scanned_id'])
   }

   /**
    *
    * @returns {Object}
    */
   serialize() {
      return { 
          last_modified: this.lastModified ? this.lastModified : undefined, 
          latitude: this.latitude ? this.latitude : undefined, 
          longitude: this.longitude ? this.longitude : undefined, 
          scanned_id: this.scannedId ? this.scannedId : undefined
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

module.exports = Scanned