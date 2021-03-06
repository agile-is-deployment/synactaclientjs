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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Organisation', 'model/Container', 'model/RecycleBinEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Organisation'), require('../model/Container'), require('../model/RecycleBinEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.Synactaclientjs) {
      root.Synactaclientjs = {};
    }
    root.Synactaclientjs.OrganisationApi = factory(root.Synactaclientjs.ApiClient, root.Synactaclientjs.Organisation, root.Synactaclientjs.Container, root.Synactaclientjs.RecycleBinEntry);
  }
}(this, function(ApiClient, Organisation, Container, RecycleBinEntry) {
  'use strict';

  /**
   * Organisation service.
   * @module api/OrganisationApi
   * @version v1
   */

  /**
   * Constructs a new OrganisationApi. 
   * @alias module:api/OrganisationApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the apiOrgByIdAddGet operation.
     * @callback module:api/OrganisationApi~apiOrgByIdAddGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Organisation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the new organisation.
     * @param {String} id The organisation identifier.
     * @param {String} authorization access token
     * @param {module:api/OrganisationApi~apiOrgByIdAddGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Organisation}
     */
    this.apiOrgByIdAddGet = function(id, authorization, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling apiOrgByIdAddGet";
      }

      // verify the required parameter 'authorization' is set
      if (authorization == undefined || authorization == null) {
        throw "Missing the required parameter 'authorization' when calling apiOrgByIdAddGet";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = Organisation;

      return this.apiClient.callApi(
        '/_api/org/{id}/Add', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiOrgByIdAddPut operation.
     * @callback module:api/OrganisationApi~apiOrgByIdAddPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Organisation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Saves the new organisation.
     * @param {String} id The organisation identifier.
     * @param {String} authorization access token
     * @param {Object} opts Optional parameters
     * @param {module:model/Organisation} opts.newOrganisation The new organisation.
     * @param {module:api/OrganisationApi~apiOrgByIdAddPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Organisation}
     */
    this.apiOrgByIdAddPut = function(id, authorization, opts, callback) {
      opts = opts || {};
      var postBody = opts['newOrganisation'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling apiOrgByIdAddPut";
      }

      // verify the required parameter 'authorization' is set
      if (authorization == undefined || authorization == null) {
        throw "Missing the required parameter 'authorization' when calling apiOrgByIdAddPut";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/json-patch+json', 'application/xml', 'text/xml'];
      var accepts = ['text/plain', 'application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = Organisation;

      return this.apiClient.callApi(
        '/_api/org/{id}/Add', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiOrgByIdByTypeGet operation.
     * @callback module:api/OrganisationApi~apiOrgByIdByTypeGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Container>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets all containers.
     * @param {String} id The organisation identifier.
     * @param {String} type Type of the container.
     * @param {String} authorization access token
     * @param {module:api/OrganisationApi~apiOrgByIdByTypeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Container>}
     */
    this.apiOrgByIdByTypeGet = function(id, type, authorization, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling apiOrgByIdByTypeGet";
      }

      // verify the required parameter 'type' is set
      if (type == undefined || type == null) {
        throw "Missing the required parameter 'type' when calling apiOrgByIdByTypeGet";
      }

      // verify the required parameter 'authorization' is set
      if (authorization == undefined || authorization == null) {
        throw "Missing the required parameter 'authorization' when calling apiOrgByIdByTypeGet";
      }


      var pathParams = {
        'id': id,
        'type': type
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = [Container];

      return this.apiClient.callApi(
        '/_api/org/{id}/{type}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiOrgByIdChildrenGet operation.
     * @callback module:api/OrganisationApi~apiOrgByIdChildrenGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Organisation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the child organisations.
     * @param {String} id The organisation identifier.
     * @param {String} authorization access token
     * @param {module:api/OrganisationApi~apiOrgByIdChildrenGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Organisation>}
     */
    this.apiOrgByIdChildrenGet = function(id, authorization, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling apiOrgByIdChildrenGet";
      }

      // verify the required parameter 'authorization' is set
      if (authorization == undefined || authorization == null) {
        throw "Missing the required parameter 'authorization' when calling apiOrgByIdChildrenGet";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = [Organisation];

      return this.apiClient.callApi(
        '/_api/org/{id}/Children', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiOrgByIdDelete operation.
     * @callback module:api/OrganisationApi~apiOrgByIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the organisation.
     * @param {String} id The organisation identifier.
     * @param {String} authorization access token
     * @param {module:api/OrganisationApi~apiOrgByIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    this.apiOrgByIdDelete = function(id, authorization, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling apiOrgByIdDelete";
      }

      // verify the required parameter 'authorization' is set
      if (authorization == undefined || authorization == null) {
        throw "Missing the required parameter 'authorization' when calling apiOrgByIdDelete";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = 'Boolean';

      return this.apiClient.callApi(
        '/_api/org/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiOrgByIdGet operation.
     * @callback module:api/OrganisationApi~apiOrgByIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Organisation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the organisation.
     * @param {String} id The organisation identifier.
     * @param {String} authorization access token
     * @param {module:api/OrganisationApi~apiOrgByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Organisation}
     */
    this.apiOrgByIdGet = function(id, authorization, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling apiOrgByIdGet";
      }

      // verify the required parameter 'authorization' is set
      if (authorization == undefined || authorization == null) {
        throw "Missing the required parameter 'authorization' when calling apiOrgByIdGet";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = Organisation;

      return this.apiClient.callApi(
        '/_api/org/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiOrgByIdMovePost operation.
     * @callback module:api/OrganisationApi~apiOrgByIdMovePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Organisation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Moves the organisation.
     * @param {String} id The organisation identifier.
     * @param {String} authorization access token
     * @param {Object} opts Optional parameters
     * @param {module:model/Organisation} opts.organisation The organisation.
     * @param {module:api/OrganisationApi~apiOrgByIdMovePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Organisation}
     */
    this.apiOrgByIdMovePost = function(id, authorization, opts, callback) {
      opts = opts || {};
      var postBody = opts['organisation'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling apiOrgByIdMovePost";
      }

      // verify the required parameter 'authorization' is set
      if (authorization == undefined || authorization == null) {
        throw "Missing the required parameter 'authorization' when calling apiOrgByIdMovePost";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/json-patch+json', 'application/xml', 'text/xml'];
      var accepts = ['text/plain', 'application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = Organisation;

      return this.apiClient.callApi(
        '/_api/org/{id}/Move', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiOrgByIdPost operation.
     * @callback module:api/OrganisationApi~apiOrgByIdPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Organisation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the organisation.
     * @param {String} id The organisation identifier.
     * @param {String} authorization access token
     * @param {Object} opts Optional parameters
     * @param {module:model/Organisation} opts.pOrganisation The organisation.
     * @param {module:api/OrganisationApi~apiOrgByIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Organisation}
     */
    this.apiOrgByIdPost = function(id, authorization, opts, callback) {
      opts = opts || {};
      var postBody = opts['pOrganisation'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling apiOrgByIdPost";
      }

      // verify the required parameter 'authorization' is set
      if (authorization == undefined || authorization == null) {
        throw "Missing the required parameter 'authorization' when calling apiOrgByIdPost";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/json-patch+json', 'application/xml', 'text/xml'];
      var accepts = ['text/plain', 'application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = Organisation;

      return this.apiClient.callApi(
        '/_api/org/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiOrgByIdRecycleBinByRecycleBinIdGet operation.
     * @callback module:api/OrganisationApi~apiOrgByIdRecycleBinByRecycleBinIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RecycleBinEntry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the recycle bin entry.
     * @param {String} id The organisation identifier.
     * @param {String} recycleBinId The recycle identifier.
     * @param {String} authorization access token
     * @param {module:api/OrganisationApi~apiOrgByIdRecycleBinByRecycleBinIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RecycleBinEntry}
     */
    this.apiOrgByIdRecycleBinByRecycleBinIdGet = function(id, recycleBinId, authorization, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling apiOrgByIdRecycleBinByRecycleBinIdGet";
      }

      // verify the required parameter 'recycleBinId' is set
      if (recycleBinId == undefined || recycleBinId == null) {
        throw "Missing the required parameter 'recycleBinId' when calling apiOrgByIdRecycleBinByRecycleBinIdGet";
      }

      // verify the required parameter 'authorization' is set
      if (authorization == undefined || authorization == null) {
        throw "Missing the required parameter 'authorization' when calling apiOrgByIdRecycleBinByRecycleBinIdGet";
      }


      var pathParams = {
        'id': id,
        'recycleBinId': recycleBinId
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = RecycleBinEntry;

      return this.apiClient.callApi(
        '/_api/org/{id}/RecycleBin/{recycleBinId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiOrgByIdRecycleBinByRecycleBinIdRestorePost operation.
     * @callback module:api/OrganisationApi~apiOrgByIdRecycleBinByRecycleBinIdRestorePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Container} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Restores the recycle bin entry.
     * @param {String} id The organisation identifier.
     * @param {String} recycleBinId The recycle bin identifier.
     * @param {String} authorization access token
     * @param {module:api/OrganisationApi~apiOrgByIdRecycleBinByRecycleBinIdRestorePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Container}
     */
    this.apiOrgByIdRecycleBinByRecycleBinIdRestorePost = function(id, recycleBinId, authorization, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling apiOrgByIdRecycleBinByRecycleBinIdRestorePost";
      }

      // verify the required parameter 'recycleBinId' is set
      if (recycleBinId == undefined || recycleBinId == null) {
        throw "Missing the required parameter 'recycleBinId' when calling apiOrgByIdRecycleBinByRecycleBinIdRestorePost";
      }

      // verify the required parameter 'authorization' is set
      if (authorization == undefined || authorization == null) {
        throw "Missing the required parameter 'authorization' when calling apiOrgByIdRecycleBinByRecycleBinIdRestorePost";
      }


      var pathParams = {
        'id': id,
        'recycleBinId': recycleBinId
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = Container;

      return this.apiClient.callApi(
        '/_api/org/{id}/RecycleBin/{recycleBinId}/Restore', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiOrgByIdRecycleBinGet operation.
     * @callback module:api/OrganisationApi~apiOrgByIdRecycleBinGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RecycleBinEntry>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the recycle bin.
     * @param {String} id The organisation identifier.
     * @param {String} authorization access token
     * @param {module:api/OrganisationApi~apiOrgByIdRecycleBinGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/RecycleBinEntry>}
     */
    this.apiOrgByIdRecycleBinGet = function(id, authorization, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling apiOrgByIdRecycleBinGet";
      }

      // verify the required parameter 'authorization' is set
      if (authorization == undefined || authorization == null) {
        throw "Missing the required parameter 'authorization' when calling apiOrgByIdRecycleBinGet";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = [RecycleBinEntry];

      return this.apiClient.callApi(
        '/_api/org/{id}/RecycleBin', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiOrgGet operation.
     * @callback module:api/OrganisationApi~apiOrgGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Organisation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets all organisations.
     * @param {String} authorization access token
     * @param {module:api/OrganisationApi~apiOrgGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Organisation>}
     */
    this.apiOrgGet = function(authorization, callback) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization == undefined || authorization == null) {
        throw "Missing the required parameter 'authorization' when calling apiOrgGet";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = [Organisation];

      return this.apiClient.callApi(
        '/_api/org', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiOrgOrgTreeGet operation.
     * @callback module:api/OrganisationApi~apiOrgOrgTreeGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Organisation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets all organisations with childs.
     * @param {String} authorization access token
     * @param {module:api/OrganisationApi~apiOrgOrgTreeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Organisation>}
     */
    this.apiOrgOrgTreeGet = function(authorization, callback) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization == undefined || authorization == null) {
        throw "Missing the required parameter 'authorization' when calling apiOrgOrgTreeGet";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = [Organisation];

      return this.apiClient.callApi(
        '/_api/org/OrgTree', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
