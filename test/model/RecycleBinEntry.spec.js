/**
 * synactaclientjs
 * WebApi
 *
 * OpenAPI spec version: v1
 * Contact: bhofmann@agile-is.de
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
    factory(root.expect, root.Synactaclientjs);
  }
}(this, function(expect, Synactaclientjs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Synactaclientjs.RecycleBinEntry();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('RecycleBinEntry', function() {
    it('should create an instance of RecycleBinEntry', function() {
      // uncomment below and update the code to test RecycleBinEntry
      //var instane = new Synactaclientjs.RecycleBinEntry();
      //expect(instance).to.be.a(Synactaclientjs.RecycleBinEntry);
    });

    it('should have the property properties (base name: "Properties")', function() {
      // uncomment below and update the code to test the property properties
      //var instane = new Synactaclientjs.RecycleBinEntry();
      //expect(instance).to.be();
    });

    it('should have the property propertyInfos (base name: "PropertyInfos")', function() {
      // uncomment below and update the code to test the property propertyInfos
      //var instane = new Synactaclientjs.RecycleBinEntry();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Synactaclientjs.RecycleBinEntry();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "Description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new Synactaclientjs.RecycleBinEntry();
      //expect(instance).to.be();
    });

    it('should have the property deletedBy (base name: "DeletedBy")', function() {
      // uncomment below and update the code to test the property deletedBy
      //var instane = new Synactaclientjs.RecycleBinEntry();
      //expect(instance).to.be();
    });

    it('should have the property deletedDate (base name: "DeletedDate")', function() {
      // uncomment below and update the code to test the property deletedDate
      //var instane = new Synactaclientjs.RecycleBinEntry();
      //expect(instance).to.be();
    });

    it('should have the property recycleID (base name: "RecycleID")', function() {
      // uncomment below and update the code to test the property recycleID
      //var instane = new Synactaclientjs.RecycleBinEntry();
      //expect(instance).to.be();
    });

    it('should have the property ID (base name: "ID")', function() {
      // uncomment below and update the code to test the property ID
      //var instane = new Synactaclientjs.RecycleBinEntry();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "Type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new Synactaclientjs.RecycleBinEntry();
      //expect(instance).to.be();
    });

    it('should have the property parentId (base name: "ParentId")', function() {
      // uncomment below and update the code to test the property parentId
      //var instane = new Synactaclientjs.RecycleBinEntry();
      //expect(instance).to.be();
    });

    it('should have the property parentType (base name: "ParentType")', function() {
      // uncomment below and update the code to test the property parentType
      //var instane = new Synactaclientjs.RecycleBinEntry();
      //expect(instance).to.be();
    });

    it('should have the property parentName (base name: "ParentName")', function() {
      // uncomment below and update the code to test the property parentName
      //var instane = new Synactaclientjs.RecycleBinEntry();
      //expect(instance).to.be();
    });

    it('should have the property organisation (base name: "Organisation")', function() {
      // uncomment below and update the code to test the property organisation
      //var instane = new Synactaclientjs.RecycleBinEntry();
      //expect(instance).to.be();
    });

    it('should have the property odataContext (base name: "@odata.context")', function() {
      // uncomment below and update the code to test the property odataContext
      //var instane = new Synactaclientjs.RecycleBinEntry();
      //expect(instance).to.be();
    });

    it('should have the property odataReadLink (base name: "@odata.readLink")', function() {
      // uncomment below and update the code to test the property odataReadLink
      //var instane = new Synactaclientjs.RecycleBinEntry();
      //expect(instance).to.be();
    });

    it('should have the property restoreodataNavigationLink (base name: "Restore@odata.navigationLink")', function() {
      // uncomment below and update the code to test the property restoreodataNavigationLink
      //var instane = new Synactaclientjs.RecycleBinEntry();
      //expect(instance).to.be();
    });

    it('should have the property fullODataLinkodataNavigationLink (base name: "FullODataLink@odata.navigationLink")', function() {
      // uncomment below and update the code to test the property fullODataLinkodataNavigationLink
      //var instane = new Synactaclientjs.RecycleBinEntry();
      //expect(instance).to.be();
    });

    it('should have the property standardODataLinkodataNavigationLink (base name: "StandardODataLink@odata.navigationLink")', function() {
      // uncomment below and update the code to test the property standardODataLinkodataNavigationLink
      //var instane = new Synactaclientjs.RecycleBinEntry();
      //expect(instance).to.be();
    });

    it('should have the property noneODataLinkodataNavigationLink (base name: "NoneODataLink@odata.navigationLink")', function() {
      // uncomment below and update the code to test the property noneODataLinkodataNavigationLink
      //var instane = new Synactaclientjs.RecycleBinEntry();
      //expect(instance).to.be();
    });

  });

}));
