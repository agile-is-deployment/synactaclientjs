# Synactaclientjs.SearchApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiSearchGet**](SearchApi.md#apiSearchGet) | **GET** /_api/search | Executes the search.


<a name="apiSearchGet"></a>
# **apiSearchGet**
> [Object] apiSearchGet(authorization)

Executes the search.

### Example
```javascript
var Synactaclientjs = require('synactaclientjs');

var apiInstance = new Synactaclientjs.SearchApi();

var authorization = "authorization_example"; // String | access token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiSearchGet(authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| access token | 

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json, application/xml, text/xml

