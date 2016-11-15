# Synactaclientjs.LoggingApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiLogAddGet**](LoggingApi.md#apiLogAddGet) | **GET** /_api/log/Add | Gets the log container.
[**apiLogAddPut**](LoggingApi.md#apiLogAddPut) | **PUT** /_api/log/Add | Adds the log.
[**apiLogGet**](LoggingApi.md#apiLogGet) | **GET** /_api/log | Gets all logs.


<a name="apiLogAddGet"></a>
# **apiLogAddGet**
> Log apiLogAddGet(authorization)

Gets the log container.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.LoggingApi();

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiLogAddGet(authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| access token | 

### Return type

[**Log**](Log.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiLogAddPut"></a>
# **apiLogAddPut**
> Log apiLogAddPut(authorization, opts)

Adds the log.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.LoggingApi();

var authorization = "authorization_example"; // String | access token

var opts = { 
  'log': new Synactaclientjs.Log() // Log | The log.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiLogAddPut(authorization, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| access token | 
 **log** | [**Log**](Log.md)| The log. | [optional] 

### Return type

[**Log**](Log.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiLogGet"></a>
# **apiLogGet**
> [Log] apiLogGet(authorization)

Gets all logs.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.LoggingApi();

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiLogGet(authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| access token | 

### Return type

[**[Log]**](Log.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

