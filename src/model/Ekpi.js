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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Peidemo) {
      root.Peidemo = {};
    }
    root.Peidemo.Ekpi = factory(root.Peidemo.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Ekpi model module.
   * @module model/Ekpi
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ekpi</code>.
   * @alias module:model/Ekpi
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Ekpi</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ekpi} obj Optional instance to populate.
   * @return {module:model/Ekpi} The populated <code>Ekpi</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('category'))
        obj.category = ApiClient.convertToType(data['category'], 'String');
      if (data.hasOwnProperty('weight'))
        obj.weight = ApiClient.convertToType(data['weight'], 'Number');
      if (data.hasOwnProperty('min'))
        obj.min = ApiClient.convertToType(data['min'], 'Number');
      if (data.hasOwnProperty('max'))
        obj.max = ApiClient.convertToType(data['max'], 'Number');
      if (data.hasOwnProperty('parentSubindex'))
        obj.parentSubindex = ApiClient.convertToType(data['parentSubindex'], 'String');
      if (data.hasOwnProperty('unit'))
        obj.unit = ApiClient.convertToType(data['unit'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {String} category
   */
  exports.prototype.category = undefined;

  /**
   * @member {Number} weight
   */
  exports.prototype.weight = undefined;

  /**
   * @member {Number} min
   */
  exports.prototype.min = undefined;

  /**
   * @member {Number} max
   */
  exports.prototype.max = undefined;

  /**
   * @member {String} parentSubindex
   */
  exports.prototype.parentSubindex = undefined;

  /**
   * @member {String} unit
   */
  exports.prototype.unit = undefined;

  return exports;

}));
