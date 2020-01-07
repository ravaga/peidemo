/*
 * PEIDEMO
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.11
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AirEmissionUnit'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AirEmissionUnit'));
  } else {
    // Browser globals (root is window)
    if (!root.Peidemo) {
      root.Peidemo = {};
    }
    root.Peidemo.AirEmission = factory(root.Peidemo.ApiClient, root.Peidemo.AirEmissionUnit);
  }
}(this, function(ApiClient, AirEmissionUnit) {
  'use strict';

  /**
   * The AirEmission model module.
   * @module model/AirEmission
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>AirEmission</code>.
   * @alias module:model/AirEmission
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AirEmission</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AirEmission} obj Optional instance to populate.
   * @return {module:model/AirEmission} The populated <code>AirEmission</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('category'))
        obj.category = ApiClient.convertToType(data['category'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('berthBykWh'))
        obj.berthBykWh = AirEmissionUnit.constructFromObject(data['berthBykWh']);
      if (data.hasOwnProperty('manouvringBykWh'))
        obj.manouvringBykWh = AirEmissionUnit.constructFromObject(data['manouvringBykWh']);
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} category
   */
  exports.prototype.category = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {module:model/AirEmissionUnit} berthBykWh
   */
  exports.prototype.berthBykWh = undefined;

  /**
   * @member {module:model/AirEmissionUnit} manouvringBykWh
   */
  exports.prototype.manouvringBykWh = undefined;

  return exports;

}));