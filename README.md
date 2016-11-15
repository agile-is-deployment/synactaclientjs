# synactaclientjs

Synactaclientjs - JavaScript client for synactaclientjs
WebApi
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: v1
- Package version: v1
- Build date: 2016-11-15T15:47:15.453Z
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen
For more information, please visit [http://www.agile-is.de/](http://www.agile-is.de/)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install synactaclientjs --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/synactaclientjs
then install it via:

```shell
    npm install YOUR_USERNAME/synactaclientjs --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Synactaclientjs = require('synactaclientjs');

var api = new Synactaclientjs.AuthorizationApi()

var id = "id_example"; // {String} The principal identifier.

var authorization = "authorization_example"; // {String} access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.apiAuthorizationPrincipalsByIdGet(id, authorization, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://localhost/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Synactaclientjs.AuthorizationApi* | [**apiAuthorizationPrincipalsByIdGet**](docs/AuthorizationApi.md#apiAuthorizationPrincipalsByIdGet) | **GET** /_api/authorization/Principals/{id} | Provides a principal by his identifier.
*Synactaclientjs.AuthorizationApi* | [**apiAuthorizationPrincipalsGet**](docs/AuthorizationApi.md#apiAuthorizationPrincipalsGet) | **GET** /_api/authorization/Principals | Gets the principals.
*Synactaclientjs.AuthorizationApi* | [**apiAuthorizationRightsGet**](docs/AuthorizationApi.md#apiAuthorizationRightsGet) | **GET** /_api/authorization/Rights | Gets the rights.
*Synactaclientjs.AuthorizationApi* | [**apiAuthorizationRolesAddGet**](docs/AuthorizationApi.md#apiAuthorizationRolesAddGet) | **GET** /_api/authorization/Roles/Add | Gets the role container.
*Synactaclientjs.AuthorizationApi* | [**apiAuthorizationRolesAddPut**](docs/AuthorizationApi.md#apiAuthorizationRolesAddPut) | **PUT** /_api/authorization/Roles/Add | Adds the role.
*Synactaclientjs.AuthorizationApi* | [**apiAuthorizationRolesByIdDelete**](docs/AuthorizationApi.md#apiAuthorizationRolesByIdDelete) | **DELETE** /_api/authorization/Roles/{id} | Deletes the role.
*Synactaclientjs.AuthorizationApi* | [**apiAuthorizationRolesByIdGet**](docs/AuthorizationApi.md#apiAuthorizationRolesByIdGet) | **GET** /_api/authorization/Roles/{id} | Gets the role.
*Synactaclientjs.AuthorizationApi* | [**apiAuthorizationRolesByIdPost**](docs/AuthorizationApi.md#apiAuthorizationRolesByIdPost) | **POST** /_api/authorization/Roles/{id} | Updates the role.
*Synactaclientjs.AuthorizationApi* | [**apiAuthorizationRolesGet**](docs/AuthorizationApi.md#apiAuthorizationRolesGet) | **GET** /_api/authorization/Roles | Gets the roles.
*Synactaclientjs.BaseApi* | [**apiBaseByTypeByIdAddByNewContainerTypeGet**](docs/BaseApi.md#apiBaseByTypeByIdAddByNewContainerTypeGet) | **GET** /_api/base/{type}/{id}/Add/{newContainerType} | Gets the empty container.
*Synactaclientjs.BaseApi* | [**apiBaseByTypeByIdAddPut**](docs/BaseApi.md#apiBaseByTypeByIdAddPut) | **PUT** /_api/base/{type}/{id}/Add | Saves the new container.
*Synactaclientjs.BaseApi* | [**apiBaseByTypeByIdCheckinPut**](docs/BaseApi.md#apiBaseByTypeByIdCheckinPut) | **PUT** /_api/base/{type}/{id}/Checkin | Checkins the specified .
*Synactaclientjs.BaseApi* | [**apiBaseByTypeByIdCheckoutPut**](docs/BaseApi.md#apiBaseByTypeByIdCheckoutPut) | **PUT** /_api/base/{type}/{id}/Checkout | Checkouts the specified .
*Synactaclientjs.BaseApi* | [**apiBaseByTypeByIdChildrenGet**](docs/BaseApi.md#apiBaseByTypeByIdChildrenGet) | **GET** /_api/base/{type}/{id}/Children | Gets the children of container.
*Synactaclientjs.BaseApi* | [**apiBaseByTypeByIdChildrenTypesGet**](docs/BaseApi.md#apiBaseByTypeByIdChildrenTypesGet) | **GET** /_api/base/{type}/{id}/Children/Types | Gets the container types.
*Synactaclientjs.BaseApi* | [**apiBaseByTypeByIdDelete**](docs/BaseApi.md#apiBaseByTypeByIdDelete) | **DELETE** /_api/base/{type}/{id} | Deletes the container.
*Synactaclientjs.BaseApi* | [**apiBaseByTypeByIdDocumentsGet**](docs/BaseApi.md#apiBaseByTypeByIdDocumentsGet) | **GET** /_api/base/{type}/{id}/Documents | Gets the documents.
*Synactaclientjs.BaseApi* | [**apiBaseByTypeByIdDocumentsTypesGet**](docs/BaseApi.md#apiBaseByTypeByIdDocumentsTypesGet) | **GET** /_api/base/{type}/{id}/Documents/Types | Gets the documents types.
*Synactaclientjs.BaseApi* | [**apiBaseByTypeByIdGet**](docs/BaseApi.md#apiBaseByTypeByIdGet) | **GET** /_api/base/{type}/{id} | Gets the container by identifier.
*Synactaclientjs.BaseApi* | [**apiBaseByTypeByIdGetFileGet**](docs/BaseApi.md#apiBaseByTypeByIdGetFileGet) | **GET** /_api/base/{type}/{id}/GetFile | Gets the file.
*Synactaclientjs.BaseApi* | [**apiBaseByTypeByIdLookupListByLookupListNameGet**](docs/BaseApi.md#apiBaseByTypeByIdLookupListByLookupListNameGet) | **GET** /_api/base/{type}/{id}/LookupList/{lookupListName} | Gets the lookup list entries.
*Synactaclientjs.BaseApi* | [**apiBaseByTypeByIdMovePost**](docs/BaseApi.md#apiBaseByTypeByIdMovePost) | **POST** /_api/base/{type}/{id}/Move | Moves the object.
*Synactaclientjs.BaseApi* | [**apiBaseByTypeByIdPost**](docs/BaseApi.md#apiBaseByTypeByIdPost) | **POST** /_api/base/{type}/{id} | Updates the container.
*Synactaclientjs.BaseApi* | [**apiBaseByTypeByIdUploadFilePost**](docs/BaseApi.md#apiBaseByTypeByIdUploadFilePost) | **POST** /_api/base/{type}/{id}/UploadFile | Uploads the file.
*Synactaclientjs.BaseApi* | [**apiBaseByTypeByIdVersionsByVersionIdGet**](docs/BaseApi.md#apiBaseByTypeByIdVersionsByVersionIdGet) | **GET** /_api/base/{type}/{id}/Versions/{versionId} | Gets the version by identifier.
*Synactaclientjs.BaseApi* | [**apiBaseByTypeByIdVersionsByVersionIdGetFileGet**](docs/BaseApi.md#apiBaseByTypeByIdVersionsByVersionIdGetFileGet) | **GET** /_api/base/{type}/{id}/Versions/{versionId}/GetFile | Gets the file for version.
*Synactaclientjs.BaseApi* | [**apiBaseByTypeByIdVersionsByVersionIdRestorePost**](docs/BaseApi.md#apiBaseByTypeByIdVersionsByVersionIdRestorePost) | **POST** /_api/base/{type}/{id}/Versions/{versionId}/Restore | Restores the version.
*Synactaclientjs.BaseApi* | [**apiBaseByTypeByIdVersionsGet**](docs/BaseApi.md#apiBaseByTypeByIdVersionsGet) | **GET** /_api/base/{type}/{id}/Versions | Gets the versions.
*Synactaclientjs.BaseApi* | [**apiBaseByTypeGet**](docs/BaseApi.md#apiBaseByTypeGet) | **GET** /_api/base/{type} | Gets containers by a type.
*Synactaclientjs.BaseApi* | [**apiBaseRootGet**](docs/BaseApi.md#apiBaseRootGet) | **GET** /_api/base/Root | Gets the root.
*Synactaclientjs.BaseApi* | [**apiBaseTypesGet**](docs/BaseApi.md#apiBaseTypesGet) | **GET** /_api/base/Types | Gets the container types.
*Synactaclientjs.LoggingApi* | [**apiLogAddGet**](docs/LoggingApi.md#apiLogAddGet) | **GET** /_api/log/Add | Gets the log container.
*Synactaclientjs.LoggingApi* | [**apiLogAddPut**](docs/LoggingApi.md#apiLogAddPut) | **PUT** /_api/log/Add | Adds the log.
*Synactaclientjs.LoggingApi* | [**apiLogGet**](docs/LoggingApi.md#apiLogGet) | **GET** /_api/log | Gets all logs.
*Synactaclientjs.OrganisationApi* | [**apiOrgByIdAddGet**](docs/OrganisationApi.md#apiOrgByIdAddGet) | **GET** /_api/org/{id}/Add | Gets the new organisation.
*Synactaclientjs.OrganisationApi* | [**apiOrgByIdAddPut**](docs/OrganisationApi.md#apiOrgByIdAddPut) | **PUT** /_api/org/{id}/Add | Saves the new organisation.
*Synactaclientjs.OrganisationApi* | [**apiOrgByIdByTypeGet**](docs/OrganisationApi.md#apiOrgByIdByTypeGet) | **GET** /_api/org/{id}/{type} | Gets all containers.
*Synactaclientjs.OrganisationApi* | [**apiOrgByIdChildrenGet**](docs/OrganisationApi.md#apiOrgByIdChildrenGet) | **GET** /_api/org/{id}/Children | Gets the child organisations.
*Synactaclientjs.OrganisationApi* | [**apiOrgByIdDelete**](docs/OrganisationApi.md#apiOrgByIdDelete) | **DELETE** /_api/org/{id} | Deletes the organisation.
*Synactaclientjs.OrganisationApi* | [**apiOrgByIdGet**](docs/OrganisationApi.md#apiOrgByIdGet) | **GET** /_api/org/{id} | Gets the organisation.
*Synactaclientjs.OrganisationApi* | [**apiOrgByIdMovePost**](docs/OrganisationApi.md#apiOrgByIdMovePost) | **POST** /_api/org/{id}/Move | Moves the organisation.
*Synactaclientjs.OrganisationApi* | [**apiOrgByIdPost**](docs/OrganisationApi.md#apiOrgByIdPost) | **POST** /_api/org/{id} | Updates the organisation.
*Synactaclientjs.OrganisationApi* | [**apiOrgByIdRecycleBinByRecycleBinIdGet**](docs/OrganisationApi.md#apiOrgByIdRecycleBinByRecycleBinIdGet) | **GET** /_api/org/{id}/RecycleBin/{recycleBinId} | Gets the recycle bin entry.
*Synactaclientjs.OrganisationApi* | [**apiOrgByIdRecycleBinByRecycleBinIdRestorePost**](docs/OrganisationApi.md#apiOrgByIdRecycleBinByRecycleBinIdRestorePost) | **POST** /_api/org/{id}/RecycleBin/{recycleBinId}/Restore | Restores the recycle bin entry.
*Synactaclientjs.OrganisationApi* | [**apiOrgByIdRecycleBinGet**](docs/OrganisationApi.md#apiOrgByIdRecycleBinGet) | **GET** /_api/org/{id}/RecycleBin | Gets the recycle bin.
*Synactaclientjs.OrganisationApi* | [**apiOrgGet**](docs/OrganisationApi.md#apiOrgGet) | **GET** /_api/org | Gets all organisations.
*Synactaclientjs.OrganisationApi* | [**apiOrgOrgTreeGet**](docs/OrganisationApi.md#apiOrgOrgTreeGet) | **GET** /_api/org/OrgTree | Gets all organisations with childs.
*Synactaclientjs.SearchApi* | [**apiSearchGet**](docs/SearchApi.md#apiSearchGet) | **GET** /_api/search | Executes the search.


## Documentation for Models

 - [Synactaclientjs.Container](docs/Container.md)
 - [Synactaclientjs.DocumentVersion](docs/DocumentVersion.md)
 - [Synactaclientjs.KeyValuePairStringString](docs/KeyValuePairStringString.md)
 - [Synactaclientjs.Log](docs/Log.md)
 - [Synactaclientjs.Organisation](docs/Organisation.md)
 - [Synactaclientjs.PrincipalSearchResult](docs/PrincipalSearchResult.md)
 - [Synactaclientjs.RecycleBinEntry](docs/RecycleBinEntry.md)
 - [Synactaclientjs.Right](docs/Right.md)
 - [Synactaclientjs.Role](docs/Role.md)


## Documentation for Authorization

 All endpoints do not require authorization.

