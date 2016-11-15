# Synactaclientjs.AuthorizationApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiAuthorizationPrincipalsByIdGet**](AuthorizationApi.md#apiAuthorizationPrincipalsByIdGet) | **GET** /_api/authorization/Principals/{id} | Provides a principal by his identifier.
[**apiAuthorizationPrincipalsGet**](AuthorizationApi.md#apiAuthorizationPrincipalsGet) | **GET** /_api/authorization/Principals | Gets the principals.
[**apiAuthorizationRightsGet**](AuthorizationApi.md#apiAuthorizationRightsGet) | **GET** /_api/authorization/Rights | Gets the rights.
[**apiAuthorizationRolesAddGet**](AuthorizationApi.md#apiAuthorizationRolesAddGet) | **GET** /_api/authorization/Roles/Add | Gets the role container.
[**apiAuthorizationRolesAddPut**](AuthorizationApi.md#apiAuthorizationRolesAddPut) | **PUT** /_api/authorization/Roles/Add | Adds the role.
[**apiAuthorizationRolesByIdDelete**](AuthorizationApi.md#apiAuthorizationRolesByIdDelete) | **DELETE** /_api/authorization/Roles/{id} | Deletes the role.
[**apiAuthorizationRolesByIdGet**](AuthorizationApi.md#apiAuthorizationRolesByIdGet) | **GET** /_api/authorization/Roles/{id} | Gets the role.
[**apiAuthorizationRolesByIdPost**](AuthorizationApi.md#apiAuthorizationRolesByIdPost) | **POST** /_api/authorization/Roles/{id} | Updates the role.
[**apiAuthorizationRolesGet**](AuthorizationApi.md#apiAuthorizationRolesGet) | **GET** /_api/authorization/Roles | Gets the roles.


<a name="apiAuthorizationPrincipalsByIdGet"></a>
# **apiAuthorizationPrincipalsByIdGet**
> PrincipalSearchResult apiAuthorizationPrincipalsByIdGet(id, authorization)

Provides a principal by his identifier.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.AuthorizationApi();

var id = "id_example"; // String | The principal identifier.

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiAuthorizationPrincipalsByIdGet(id, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The principal identifier. | 
 **authorization** | **String**| access token | 

### Return type

[**PrincipalSearchResult**](PrincipalSearchResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiAuthorizationPrincipalsGet"></a>
# **apiAuthorizationPrincipalsGet**
> [PrincipalSearchResult] apiAuthorizationPrincipalsGet(authorization)

Gets the principals.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.AuthorizationApi();

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiAuthorizationPrincipalsGet(authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| access token | 

### Return type

[**[PrincipalSearchResult]**](PrincipalSearchResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiAuthorizationRightsGet"></a>
# **apiAuthorizationRightsGet**
> [Right] apiAuthorizationRightsGet(authorization)

Gets the rights.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.AuthorizationApi();

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiAuthorizationRightsGet(authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| access token | 

### Return type

[**[Right]**](Right.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

<a name="apiAuthorizationRolesAddGet"></a>
# **apiAuthorizationRolesAddGet**
> Role apiAuthorizationRolesAddGet(authorization)

Gets the role container.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.AuthorizationApi();

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiAuthorizationRolesAddGet(authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| access token | 

### Return type

[**Role**](Role.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

<a name="apiAuthorizationRolesAddPut"></a>
# **apiAuthorizationRolesAddPut**
> Role apiAuthorizationRolesAddPut(authorization, opts)

Adds the role.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.AuthorizationApi();

var authorization = "authorization_example"; // String | access token

var opts = { 
  'role': new Synactaclientjs.Role() // Role | The role.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiAuthorizationRolesAddPut(authorization, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| access token | 
 **role** | [**Role**](Role.md)| The role. | [optional] 

### Return type

[**Role**](Role.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json, application/xml, text/xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

<a name="apiAuthorizationRolesByIdDelete"></a>
# **apiAuthorizationRolesByIdDelete**
> &#39;Boolean&#39; apiAuthorizationRolesByIdDelete(id, authorization)

Deletes the role.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.AuthorizationApi();

var id = "id_example"; // String | The role identifier.

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiAuthorizationRolesByIdDelete(id, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The role identifier. | 
 **authorization** | **String**| access token | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

<a name="apiAuthorizationRolesByIdGet"></a>
# **apiAuthorizationRolesByIdGet**
> Role apiAuthorizationRolesByIdGet(id, authorization)

Gets the role.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.AuthorizationApi();

var id = "id_example"; // String | The role identifier.

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiAuthorizationRolesByIdGet(id, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The role identifier. | 
 **authorization** | **String**| access token | 

### Return type

[**Role**](Role.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

<a name="apiAuthorizationRolesByIdPost"></a>
# **apiAuthorizationRolesByIdPost**
> Role apiAuthorizationRolesByIdPost(id, authorization, opts)

Updates the role.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.AuthorizationApi();

var id = "id_example"; // String | The role identifier.

var authorization = "authorization_example"; // String | access token

var opts = { 
  'role': new Synactaclientjs.Role() // Role | The role.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiAuthorizationRolesByIdPost(id, authorization, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The role identifier. | 
 **authorization** | **String**| access token | 
 **role** | [**Role**](Role.md)| The role. | [optional] 

### Return type

[**Role**](Role.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json, application/xml, text/xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

<a name="apiAuthorizationRolesGet"></a>
# **apiAuthorizationRolesGet**
> [Role] apiAuthorizationRolesGet(authorization)

Gets the roles.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.AuthorizationApi();

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiAuthorizationRolesGet(authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| access token | 

### Return type

[**[Role]**](Role.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

