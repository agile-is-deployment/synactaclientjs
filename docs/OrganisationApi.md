# Synactaclientjs.OrganisationApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiOrgByIdAddGet**](OrganisationApi.md#apiOrgByIdAddGet) | **GET** /_api/org/{id}/Add | Gets the new organisation.
[**apiOrgByIdAddPut**](OrganisationApi.md#apiOrgByIdAddPut) | **PUT** /_api/org/{id}/Add | Saves the new organisation.
[**apiOrgByIdByTypeGet**](OrganisationApi.md#apiOrgByIdByTypeGet) | **GET** /_api/org/{id}/{type} | Gets all containers.
[**apiOrgByIdChildrenGet**](OrganisationApi.md#apiOrgByIdChildrenGet) | **GET** /_api/org/{id}/Children | Gets the child organisations.
[**apiOrgByIdDelete**](OrganisationApi.md#apiOrgByIdDelete) | **DELETE** /_api/org/{id} | Deletes the organisation.
[**apiOrgByIdGet**](OrganisationApi.md#apiOrgByIdGet) | **GET** /_api/org/{id} | Gets the organisation.
[**apiOrgByIdMovePost**](OrganisationApi.md#apiOrgByIdMovePost) | **POST** /_api/org/{id}/Move | Moves the organisation.
[**apiOrgByIdPost**](OrganisationApi.md#apiOrgByIdPost) | **POST** /_api/org/{id} | Updates the organisation.
[**apiOrgByIdRecycleBinByRecycleBinIdGet**](OrganisationApi.md#apiOrgByIdRecycleBinByRecycleBinIdGet) | **GET** /_api/org/{id}/RecycleBin/{recycleBinId} | Gets the recycle bin entry.
[**apiOrgByIdRecycleBinByRecycleBinIdRestorePost**](OrganisationApi.md#apiOrgByIdRecycleBinByRecycleBinIdRestorePost) | **POST** /_api/org/{id}/RecycleBin/{recycleBinId}/Restore | Restores the recycle bin entry.
[**apiOrgByIdRecycleBinGet**](OrganisationApi.md#apiOrgByIdRecycleBinGet) | **GET** /_api/org/{id}/RecycleBin | Gets the recycle bin.
[**apiOrgGet**](OrganisationApi.md#apiOrgGet) | **GET** /_api/org | Gets all organisations.
[**apiOrgOrgTreeGet**](OrganisationApi.md#apiOrgOrgTreeGet) | **GET** /_api/org/OrgTree | Gets all organisations with childs.


<a name="apiOrgByIdAddGet"></a>
# **apiOrgByIdAddGet**
> Organisation apiOrgByIdAddGet(id, authorization)

Gets the new organisation.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.OrganisationApi();

var id = "id_example"; // String | The organisation identifier.

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiOrgByIdAddGet(id, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The organisation identifier. | 
 **authorization** | **String**| access token | 

### Return type

[**Organisation**](Organisation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

<a name="apiOrgByIdAddPut"></a>
# **apiOrgByIdAddPut**
> Organisation apiOrgByIdAddPut(id, authorization, opts)

Saves the new organisation.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.OrganisationApi();

var id = "id_example"; // String | The organisation identifier.

var authorization = "authorization_example"; // String | access token

var opts = { 
  'newOrganisation': new Synactaclientjs.Organisation() // Organisation | The new organisation.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiOrgByIdAddPut(id, authorization, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The organisation identifier. | 
 **authorization** | **String**| access token | 
 **newOrganisation** | [**Organisation**](Organisation.md)| The new organisation. | [optional] 

### Return type

[**Organisation**](Organisation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json, application/xml, text/xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

<a name="apiOrgByIdByTypeGet"></a>
# **apiOrgByIdByTypeGet**
> [Container] apiOrgByIdByTypeGet(id, type, authorization)

Gets all containers.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.OrganisationApi();

var id = "id_example"; // String | The organisation identifier.

var type = "type_example"; // String | Type of the container.

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiOrgByIdByTypeGet(id, type, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The organisation identifier. | 
 **type** | **String**| Type of the container. | 
 **authorization** | **String**| access token | 

### Return type

[**[Container]**](Container.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiOrgByIdChildrenGet"></a>
# **apiOrgByIdChildrenGet**
> [Organisation] apiOrgByIdChildrenGet(id, authorization)

Gets the child organisations.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.OrganisationApi();

var id = "id_example"; // String | The organisation identifier.

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiOrgByIdChildrenGet(id, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The organisation identifier. | 
 **authorization** | **String**| access token | 

### Return type

[**[Organisation]**](Organisation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

<a name="apiOrgByIdDelete"></a>
# **apiOrgByIdDelete**
> &#39;Boolean&#39; apiOrgByIdDelete(id, authorization)

Deletes the organisation.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.OrganisationApi();

var id = "id_example"; // String | The organisation identifier.

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiOrgByIdDelete(id, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The organisation identifier. | 
 **authorization** | **String**| access token | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

<a name="apiOrgByIdGet"></a>
# **apiOrgByIdGet**
> Organisation apiOrgByIdGet(id, authorization)

Gets the organisation.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.OrganisationApi();

var id = "id_example"; // String | The organisation identifier.

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiOrgByIdGet(id, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The organisation identifier. | 
 **authorization** | **String**| access token | 

### Return type

[**Organisation**](Organisation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

<a name="apiOrgByIdMovePost"></a>
# **apiOrgByIdMovePost**
> Organisation apiOrgByIdMovePost(id, authorization, opts)

Moves the organisation.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.OrganisationApi();

var id = "id_example"; // String | The organisation identifier.

var authorization = "authorization_example"; // String | access token

var opts = { 
  'organisation': new Synactaclientjs.Organisation() // Organisation | The organisation.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiOrgByIdMovePost(id, authorization, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The organisation identifier. | 
 **authorization** | **String**| access token | 
 **organisation** | [**Organisation**](Organisation.md)| The organisation. | [optional] 

### Return type

[**Organisation**](Organisation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json, application/xml, text/xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

<a name="apiOrgByIdPost"></a>
# **apiOrgByIdPost**
> Organisation apiOrgByIdPost(id, authorization, opts)

Updates the organisation.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.OrganisationApi();

var id = "id_example"; // String | The organisation identifier.

var authorization = "authorization_example"; // String | access token

var opts = { 
  'pOrganisation': new Synactaclientjs.Organisation() // Organisation | The organisation.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiOrgByIdPost(id, authorization, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The organisation identifier. | 
 **authorization** | **String**| access token | 
 **pOrganisation** | [**Organisation**](Organisation.md)| The organisation. | [optional] 

### Return type

[**Organisation**](Organisation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json, application/xml, text/xml
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

<a name="apiOrgByIdRecycleBinByRecycleBinIdGet"></a>
# **apiOrgByIdRecycleBinByRecycleBinIdGet**
> RecycleBinEntry apiOrgByIdRecycleBinByRecycleBinIdGet(id, recycleBinId, authorization)

Gets the recycle bin entry.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.OrganisationApi();

var id = "id_example"; // String | The organisation identifier.

var recycleBinId = "recycleBinId_example"; // String | The recycle identifier.

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiOrgByIdRecycleBinByRecycleBinIdGet(id, recycleBinId, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The organisation identifier. | 
 **recycleBinId** | **String**| The recycle identifier. | 
 **authorization** | **String**| access token | 

### Return type

[**RecycleBinEntry**](RecycleBinEntry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiOrgByIdRecycleBinByRecycleBinIdRestorePost"></a>
# **apiOrgByIdRecycleBinByRecycleBinIdRestorePost**
> Container apiOrgByIdRecycleBinByRecycleBinIdRestorePost(id, recycleBinId, authorization)

Restores the recycle bin entry.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.OrganisationApi();

var id = "id_example"; // String | The organisation identifier.

var recycleBinId = "recycleBinId_example"; // String | The recycle bin identifier.

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiOrgByIdRecycleBinByRecycleBinIdRestorePost(id, recycleBinId, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The organisation identifier. | 
 **recycleBinId** | **String**| The recycle bin identifier. | 
 **authorization** | **String**| access token | 

### Return type

[**Container**](Container.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiOrgByIdRecycleBinGet"></a>
# **apiOrgByIdRecycleBinGet**
> [RecycleBinEntry] apiOrgByIdRecycleBinGet(id, authorization)

Gets the recycle bin.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.OrganisationApi();

var id = "id_example"; // String | The organisation identifier.

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiOrgByIdRecycleBinGet(id, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The organisation identifier. | 
 **authorization** | **String**| access token | 

### Return type

[**[RecycleBinEntry]**](RecycleBinEntry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiOrgGet"></a>
# **apiOrgGet**
> [Organisation] apiOrgGet(authorization)

Gets all organisations.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.OrganisationApi();

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiOrgGet(authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| access token | 

### Return type

[**[Organisation]**](Organisation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

<a name="apiOrgOrgTreeGet"></a>
# **apiOrgOrgTreeGet**
> [Organisation] apiOrgOrgTreeGet(authorization)

Gets all organisations with childs.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.OrganisationApi();

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiOrgOrgTreeGet(authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| access token | 

### Return type

[**[Organisation]**](Organisation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

