# Peidemo.LoadMCRResourceApi

All URIs are relative to *http://otpixel.satrdlab.upv.es:8080/peidemo/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLoadMCR**](LoadMCRResourceApi.md#createLoadMCR) | **PUT** /LoadMCRs/create | Create a LoadMCR
[**deleteLoadMCR**](LoadMCRResourceApi.md#deleteLoadMCR) | **DELETE** /LoadMCRs/delete/{id} | Delete a LoadMCR
[**getLoadMCRByID**](LoadMCRResourceApi.md#getLoadMCRByID) | **GET** /LoadMCRs/get/{id} | Get a LoadMCR by id
[**listLoadMCRs**](LoadMCRResourceApi.md#listLoadMCRs) | **GET** /LoadMCRs/list | List all LoadMCRs
[**updateLoadMCR**](LoadMCRResourceApi.md#updateLoadMCR) | **POST** /LoadMCRs/update | Update a LoadMCR


<a name="createLoadMCR"></a>
# **createLoadMCR**
> LoadMCR createLoadMCR(body)

Create a LoadMCR

If id is not provided, it will be randomly generated

### Example
```javascript
var Peidemo = require('peidemo');
var defaultClient = Peidemo.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Peidemo.LoadMCRResourceApi();

var body = new Peidemo.LoadMCR(); // LoadMCR | LoadMCR description


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createLoadMCR(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LoadMCR**](LoadMCR.md)| LoadMCR description | 

### Return type

[**LoadMCR**](LoadMCR.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteLoadMCR"></a>
# **deleteLoadMCR**
> deleteLoadMCR(id)

Delete a LoadMCR



### Example
```javascript
var Peidemo = require('peidemo');
var defaultClient = Peidemo.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Peidemo.LoadMCRResourceApi();

var id = "id_example"; // String | ID of LoadMCR


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteLoadMCR(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of LoadMCR | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getLoadMCRByID"></a>
# **getLoadMCRByID**
> LoadMCR getLoadMCRByID(id)

Get a LoadMCR by id



### Example
```javascript
var Peidemo = require('peidemo');
var defaultClient = Peidemo.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Peidemo.LoadMCRResourceApi();

var id = "id_example"; // String | LoadMCR


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLoadMCRByID(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| LoadMCR | 

### Return type

[**LoadMCR**](LoadMCR.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listLoadMCRs"></a>
# **listLoadMCRs**
> [LoadMCR] listLoadMCRs(opts)

List all LoadMCRs



### Example
```javascript
var Peidemo = require('peidemo');
var defaultClient = Peidemo.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Peidemo.LoadMCRResourceApi();

var opts = { 
  'category': "category_example" // String | category
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listLoadMCRs(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **String**| category | [optional] 

### Return type

[**[LoadMCR]**](LoadMCR.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateLoadMCR"></a>
# **updateLoadMCR**
> LoadMCR updateLoadMCR(body)

Update a LoadMCR



### Example
```javascript
var Peidemo = require('peidemo');
var defaultClient = Peidemo.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Peidemo.LoadMCRResourceApi();

var body = new Peidemo.LoadMCR(); // LoadMCR | LoadMCR description


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateLoadMCR(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LoadMCR**](LoadMCR.md)| LoadMCR description | 

### Return type

[**LoadMCR**](LoadMCR.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

