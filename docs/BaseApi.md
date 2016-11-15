# Synactaclientjs.BaseApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiBaseByTypeByIdAddByNewContainerTypeGet**](BaseApi.md#apiBaseByTypeByIdAddByNewContainerTypeGet) | **GET** /_api/base/{type}/{id}/Add/{newContainerType} | Gets the empty container.
[**apiBaseByTypeByIdAddPut**](BaseApi.md#apiBaseByTypeByIdAddPut) | **PUT** /_api/base/{type}/{id}/Add | Saves the new container.
[**apiBaseByTypeByIdCheckinPut**](BaseApi.md#apiBaseByTypeByIdCheckinPut) | **PUT** /_api/base/{type}/{id}/Checkin | Checkins the specified .
[**apiBaseByTypeByIdCheckoutPut**](BaseApi.md#apiBaseByTypeByIdCheckoutPut) | **PUT** /_api/base/{type}/{id}/Checkout | Checkouts the specified .
[**apiBaseByTypeByIdChildrenGet**](BaseApi.md#apiBaseByTypeByIdChildrenGet) | **GET** /_api/base/{type}/{id}/Children | Gets the children of container.
[**apiBaseByTypeByIdChildrenTypesGet**](BaseApi.md#apiBaseByTypeByIdChildrenTypesGet) | **GET** /_api/base/{type}/{id}/Children/Types | Gets the container types.
[**apiBaseByTypeByIdDelete**](BaseApi.md#apiBaseByTypeByIdDelete) | **DELETE** /_api/base/{type}/{id} | Deletes the container.
[**apiBaseByTypeByIdDocumentsGet**](BaseApi.md#apiBaseByTypeByIdDocumentsGet) | **GET** /_api/base/{type}/{id}/Documents | Gets the documents.
[**apiBaseByTypeByIdDocumentsTypesGet**](BaseApi.md#apiBaseByTypeByIdDocumentsTypesGet) | **GET** /_api/base/{type}/{id}/Documents/Types | Gets the documents types.
[**apiBaseByTypeByIdGet**](BaseApi.md#apiBaseByTypeByIdGet) | **GET** /_api/base/{type}/{id} | Gets the container by identifier.
[**apiBaseByTypeByIdGetFileGet**](BaseApi.md#apiBaseByTypeByIdGetFileGet) | **GET** /_api/base/{type}/{id}/GetFile | Gets the file.
[**apiBaseByTypeByIdLookupListByLookupListNameGet**](BaseApi.md#apiBaseByTypeByIdLookupListByLookupListNameGet) | **GET** /_api/base/{type}/{id}/LookupList/{lookupListName} | Gets the lookup list entries.
[**apiBaseByTypeByIdMovePost**](BaseApi.md#apiBaseByTypeByIdMovePost) | **POST** /_api/base/{type}/{id}/Move | Moves the object.
[**apiBaseByTypeByIdPost**](BaseApi.md#apiBaseByTypeByIdPost) | **POST** /_api/base/{type}/{id} | Updates the container.
[**apiBaseByTypeByIdUploadFilePost**](BaseApi.md#apiBaseByTypeByIdUploadFilePost) | **POST** /_api/base/{type}/{id}/UploadFile | Uploads the file.
[**apiBaseByTypeByIdVersionsByVersionIdGet**](BaseApi.md#apiBaseByTypeByIdVersionsByVersionIdGet) | **GET** /_api/base/{type}/{id}/Versions/{versionId} | Gets the version by identifier.
[**apiBaseByTypeByIdVersionsByVersionIdGetFileGet**](BaseApi.md#apiBaseByTypeByIdVersionsByVersionIdGetFileGet) | **GET** /_api/base/{type}/{id}/Versions/{versionId}/GetFile | Gets the file for version.
[**apiBaseByTypeByIdVersionsByVersionIdRestorePost**](BaseApi.md#apiBaseByTypeByIdVersionsByVersionIdRestorePost) | **POST** /_api/base/{type}/{id}/Versions/{versionId}/Restore | Restores the version.
[**apiBaseByTypeByIdVersionsGet**](BaseApi.md#apiBaseByTypeByIdVersionsGet) | **GET** /_api/base/{type}/{id}/Versions | Gets the versions.
[**apiBaseByTypeGet**](BaseApi.md#apiBaseByTypeGet) | **GET** /_api/base/{type} | Gets containers by a type.
[**apiBaseRootGet**](BaseApi.md#apiBaseRootGet) | **GET** /_api/base/Root | Gets the root.
[**apiBaseTypesGet**](BaseApi.md#apiBaseTypesGet) | **GET** /_api/base/Types | Gets the container types.


<a name="apiBaseByTypeByIdAddByNewContainerTypeGet"></a>
# **apiBaseByTypeByIdAddByNewContainerTypeGet**
> Container apiBaseByTypeByIdAddByNewContainerTypeGet(type, id, newContainerType, authorization)

Gets the empty container.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.BaseApi();

var type = "type_example"; // String | Type of the container.

var id = "id_example"; // String | The container identifier.

var newContainerType = "newContainerType_example"; // String | New type of the container.

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiBaseByTypeByIdAddByNewContainerTypeGet(type, id, newContainerType, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Type of the container. | 
 **id** | **String**| The container identifier. | 
 **newContainerType** | **String**| New type of the container. | 
 **authorization** | **String**| access token | 

### Return type

[**Container**](Container.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiBaseByTypeByIdAddPut"></a>
# **apiBaseByTypeByIdAddPut**
> Container apiBaseByTypeByIdAddPut(type, id, authorization, opts)

Saves the new container.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.BaseApi();

var type = "type_example"; // String | Type of the container.

var id = "id_example"; // String | The container identifier.

var authorization = "authorization_example"; // String | access token

var opts = { 
  'newContainer': new Synactaclientjs.Container() // Container | The new container.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiBaseByTypeByIdAddPut(type, id, authorization, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Type of the container. | 
 **id** | **String**| The container identifier. | 
 **authorization** | **String**| access token | 
 **newContainer** | [**Container**](Container.md)| The new container. | [optional] 

### Return type

[**Container**](Container.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiBaseByTypeByIdCheckinPut"></a>
# **apiBaseByTypeByIdCheckinPut**
> Container apiBaseByTypeByIdCheckinPut(type, id, authorization, opts)

Checkins the specified .

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.BaseApi();

var type = "type_example"; // String | Type of the document.

var id = "id_example"; // String | The document identifier.

var authorization = "authorization_example"; // String | access token

var opts = { 
  'container': new Synactaclientjs.Container() // Container | The container.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiBaseByTypeByIdCheckinPut(type, id, authorization, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Type of the document. | 
 **id** | **String**| The document identifier. | 
 **authorization** | **String**| access token | 
 **container** | [**Container**](Container.md)| The container. | [optional] 

### Return type

[**Container**](Container.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiBaseByTypeByIdCheckoutPut"></a>
# **apiBaseByTypeByIdCheckoutPut**
> Container apiBaseByTypeByIdCheckoutPut(type, id, authorization, opts)

Checkouts the specified .

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.BaseApi();

var type = "type_example"; // String | Type of the document.

var id = "id_example"; // String | The document identifier.

var authorization = "authorization_example"; // String | access token

var opts = { 
  'container': new Synactaclientjs.Container() // Container | The container.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiBaseByTypeByIdCheckoutPut(type, id, authorization, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Type of the document. | 
 **id** | **String**| The document identifier. | 
 **authorization** | **String**| access token | 
 **container** | [**Container**](Container.md)| The container. | [optional] 

### Return type

[**Container**](Container.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiBaseByTypeByIdChildrenGet"></a>
# **apiBaseByTypeByIdChildrenGet**
> [Container] apiBaseByTypeByIdChildrenGet(type, id, authorization)

Gets the children of container.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.BaseApi();

var type = "type_example"; // String | Type of the container.

var id = "id_example"; // String | The container identifier.

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiBaseByTypeByIdChildrenGet(type, id, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Type of the container. | 
 **id** | **String**| The container identifier. | 
 **authorization** | **String**| access token | 

### Return type

[**[Container]**](Container.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiBaseByTypeByIdChildrenTypesGet"></a>
# **apiBaseByTypeByIdChildrenTypesGet**
> [&#39;String&#39;] apiBaseByTypeByIdChildrenTypesGet(type, id, authorization)

Gets the container types.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.BaseApi();

var type = "type_example"; // String | Type of the container.

var id = "id_example"; // String | The container identifier.

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiBaseByTypeByIdChildrenTypesGet(type, id, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Type of the container. | 
 **id** | **String**| The container identifier. | 
 **authorization** | **String**| access token | 

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

<a name="apiBaseByTypeByIdDelete"></a>
# **apiBaseByTypeByIdDelete**
> &#39;Boolean&#39; apiBaseByTypeByIdDelete(type, id, authorization)

Deletes the container.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.BaseApi();

var type = "type_example"; // String | Type of the container.

var id = "id_example"; // String | The container identifier.

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiBaseByTypeByIdDelete(type, id, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Type of the container. | 
 **id** | **String**| The container identifier. | 
 **authorization** | **String**| access token | 

### Return type

**&#39;Boolean&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

<a name="apiBaseByTypeByIdDocumentsGet"></a>
# **apiBaseByTypeByIdDocumentsGet**
> [Container] apiBaseByTypeByIdDocumentsGet(type, id, authorization)

Gets the documents.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.BaseApi();

var type = "type_example"; // String | Type of the container.

var id = "id_example"; // String | The container identifier.

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiBaseByTypeByIdDocumentsGet(type, id, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Type of the container. | 
 **id** | **String**| The container identifier. | 
 **authorization** | **String**| access token | 

### Return type

[**[Container]**](Container.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiBaseByTypeByIdDocumentsTypesGet"></a>
# **apiBaseByTypeByIdDocumentsTypesGet**
> [&#39;String&#39;] apiBaseByTypeByIdDocumentsTypesGet(type, id, authorization)

Gets the documents types.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.BaseApi();

var type = "type_example"; // String | Type of the container.

var id = "id_example"; // String | The container identifier.

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiBaseByTypeByIdDocumentsTypesGet(type, id, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Type of the container. | 
 **id** | **String**| The container identifier. | 
 **authorization** | **String**| access token | 

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

<a name="apiBaseByTypeByIdGet"></a>
# **apiBaseByTypeByIdGet**
> Container apiBaseByTypeByIdGet(type, id, authorization)

Gets the container by identifier.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.BaseApi();

var type = "type_example"; // String | Type of the container.

var id = "id_example"; // String | The container identifer.

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiBaseByTypeByIdGet(type, id, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Type of the container. | 
 **id** | **String**| The container identifer. | 
 **authorization** | **String**| access token | 

### Return type

[**Container**](Container.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiBaseByTypeByIdGetFileGet"></a>
# **apiBaseByTypeByIdGetFileGet**
> apiBaseByTypeByIdGetFileGet(type, id, authorization)

Gets the file.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.BaseApi();

var type = "type_example"; // String | Type of the document.

var id = "id_example"; // String | The document identifier.

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBaseByTypeByIdGetFileGet(type, id, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Type of the document. | 
 **id** | **String**| The document identifier. | 
 **authorization** | **String**| access token | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiBaseByTypeByIdLookupListByLookupListNameGet"></a>
# **apiBaseByTypeByIdLookupListByLookupListNameGet**
> [KeyValuePairStringString] apiBaseByTypeByIdLookupListByLookupListNameGet(type, id, lookupListName, authorization)

Gets the lookup list entries.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.BaseApi();

var type = "type_example"; // String | Type of the container.

var id = "id_example"; // String | The container identifier.

var lookupListName = "lookupListName_example"; // String | Name of the lookup list.

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiBaseByTypeByIdLookupListByLookupListNameGet(type, id, lookupListName, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Type of the container. | 
 **id** | **String**| The container identifier. | 
 **lookupListName** | **String**| Name of the lookup list. | 
 **authorization** | **String**| access token | 

### Return type

[**[KeyValuePairStringString]**](KeyValuePairStringString.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

<a name="apiBaseByTypeByIdMovePost"></a>
# **apiBaseByTypeByIdMovePost**
> Container apiBaseByTypeByIdMovePost(type, id, authorization, opts)

Moves the object.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.BaseApi();

var type = "type_example"; // String | Type of the container.

var id = "id_example"; // String | The container identifier.

var authorization = "authorization_example"; // String | access token

var opts = { 
  'container': new Synactaclientjs.Container() // Container | The container.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiBaseByTypeByIdMovePost(type, id, authorization, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Type of the container. | 
 **id** | **String**| The container identifier. | 
 **authorization** | **String**| access token | 
 **container** | [**Container**](Container.md)| The container. | [optional] 

### Return type

[**Container**](Container.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiBaseByTypeByIdPost"></a>
# **apiBaseByTypeByIdPost**
> Container apiBaseByTypeByIdPost(type, id, authorization, opts)

Updates the container.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.BaseApi();

var type = "type_example"; // String | Type of the container.

var id = "id_example"; // String | The container identifier.

var authorization = "authorization_example"; // String | access token

var opts = { 
  'newContainer': new Synactaclientjs.Container() // Container | The new container.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiBaseByTypeByIdPost(type, id, authorization, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Type of the container. | 
 **id** | **String**| The container identifier. | 
 **authorization** | **String**| access token | 
 **newContainer** | [**Container**](Container.md)| The new container. | [optional] 

### Return type

[**Container**](Container.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiBaseByTypeByIdUploadFilePost"></a>
# **apiBaseByTypeByIdUploadFilePost**
> apiBaseByTypeByIdUploadFilePost(type, id, authorization)

Uploads the file.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.BaseApi();

var type = "type_example"; // String | Type of the document.

var id = "id_example"; // String | The document identifier.

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBaseByTypeByIdUploadFilePost(type, id, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Type of the document. | 
 **id** | **String**| The document identifier. | 
 **authorization** | **String**| access token | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiBaseByTypeByIdVersionsByVersionIdGet"></a>
# **apiBaseByTypeByIdVersionsByVersionIdGet**
> DocumentVersion apiBaseByTypeByIdVersionsByVersionIdGet(type, id, versionId, authorization)

Gets the version by identifier.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.BaseApi();

var type = "type_example"; // String | Type of the document.

var id = "id_example"; // String | The document identifier.

var versionId = "versionId_example"; // String | The version identifier.

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiBaseByTypeByIdVersionsByVersionIdGet(type, id, versionId, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Type of the document. | 
 **id** | **String**| The document identifier. | 
 **versionId** | **String**| The version identifier. | 
 **authorization** | **String**| access token | 

### Return type

[**DocumentVersion**](DocumentVersion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

<a name="apiBaseByTypeByIdVersionsByVersionIdGetFileGet"></a>
# **apiBaseByTypeByIdVersionsByVersionIdGetFileGet**
> apiBaseByTypeByIdVersionsByVersionIdGetFileGet(type, id, versionId, authorization)

Gets the file for version.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.BaseApi();

var type = "type_example"; // String | Type of the document .

var id = "id_example"; // String | The document identifier.

var versionId = "versionId_example"; // String | The version identifier.

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBaseByTypeByIdVersionsByVersionIdGetFileGet(type, id, versionId, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Type of the document . | 
 **id** | **String**| The document identifier. | 
 **versionId** | **String**| The version identifier. | 
 **authorization** | **String**| access token | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiBaseByTypeByIdVersionsByVersionIdRestorePost"></a>
# **apiBaseByTypeByIdVersionsByVersionIdRestorePost**
> Container apiBaseByTypeByIdVersionsByVersionIdRestorePost(type, id, versionId, authorization)

Restores the version.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.BaseApi();

var type = "type_example"; // String | Type of the document .

var id = "id_example"; // String | The document identifier.

var versionId = "versionId_example"; // String | The version identifier.

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiBaseByTypeByIdVersionsByVersionIdRestorePost(type, id, versionId, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Type of the document . | 
 **id** | **String**| The document identifier. | 
 **versionId** | **String**| The version identifier. | 
 **authorization** | **String**| access token | 

### Return type

[**Container**](Container.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiBaseByTypeByIdVersionsGet"></a>
# **apiBaseByTypeByIdVersionsGet**
> [DocumentVersion] apiBaseByTypeByIdVersionsGet(type, id, authorization)

Gets the versions.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.BaseApi();

var type = "type_example"; // String | Type of the document.

var id = "id_example"; // String | The document identifier.

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiBaseByTypeByIdVersionsGet(type, id, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Type of the document. | 
 **id** | **String**| The document identifier. | 
 **authorization** | **String**| access token | 

### Return type

[**[DocumentVersion]**](DocumentVersion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

<a name="apiBaseByTypeGet"></a>
# **apiBaseByTypeGet**
> [Container] apiBaseByTypeGet(type, authorization)

Gets containers by a type.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.BaseApi();

var type = "type_example"; // String | Type of the container.

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiBaseByTypeGet(type, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Type of the container. | 
 **authorization** | **String**| access token | 

### Return type

[**[Container]**](Container.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiBaseRootGet"></a>
# **apiBaseRootGet**
> [Container] apiBaseRootGet(authorization)

Gets the root.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.BaseApi();

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiBaseRootGet(authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| access token | 

### Return type

[**[Container]**](Container.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiBaseTypesGet"></a>
# **apiBaseTypesGet**
> [&#39;String&#39;] apiBaseTypesGet(authorization)

Gets the container types.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.BaseApi();

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiBaseTypesGet(authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| access token | 

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

