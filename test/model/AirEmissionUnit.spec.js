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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Peidemo);
  }
}(this, function(expect, Peidemo) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('AirEmissionUnit', function() {
      beforeEach(function() {
        instance = new Peidemo.AirEmissionUnit();
      });

      it('should create an instance of AirEmissionUnit', function() {
        // TODO: update the code to test AirEmissionUnit
        expect(instance).to.be.a(Peidemo.AirEmissionUnit);
      });

      it('should have the property operation (base name: "operation")', function() {
        // TODO: update the code to test the property operation
        expect(instance).to.have.property('operation');
        // expect(instance.operation).to.be(expectedValueLiteral);
      });

      it('should have the property units (base name: "units")', function() {
        // TODO: update the code to test the property units
        expect(instance).to.have.property('units');
        // expect(instance.units).to.be(expectedValueLiteral);
      });

      it('should have the property co2 (base name: "co2")', function() {
        // TODO: update the code to test the property co2
        expect(instance).to.have.property('co2');
        // expect(instance.co2).to.be(expectedValueLiteral);
      });

      it('should have the property nox (base name: "nox")', function() {
        // TODO: update the code to test the property nox
        expect(instance).to.have.property('nox');
        // expect(instance.nox).to.be(expectedValueLiteral);
      });

      it('should have the property so2 (base name: "so2")', function() {
        // TODO: update the code to test the property so2
        expect(instance).to.have.property('so2');
        // expect(instance.so2).to.be(expectedValueLiteral);
      });

      it('should have the property hc (base name: "hc")', function() {
        // TODO: update the code to test the property hc
        expect(instance).to.have.property('hc');
        // expect(instance.hc).to.be(expectedValueLiteral);
      });

      it('should have the property pm (base name: "pm")', function() {
        // TODO: update the code to test the property pm
        expect(instance).to.have.property('pm');
        // expect(instance.pm).to.be(expectedValueLiteral);
      });

    });
  });

}));
