# Peidemo.AirEmissionResourceApi

All URIs are relative to *http://otpixel.satrdlab.upv.es:8080/peidemo/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAirEmission**](AirEmissionResourceApi.md#createAirEmission) | **PUT** /airEmissions/create | Create a AirEmission
[**deleteAirEmission**](AirEmissionResourceApi.md#deleteAirEmission) | **DELETE** /airEmissions/delete/{id} | Delete a AirEmission
[**getAirEmissionByID**](AirEmissionResourceApi.md#getAirEmissionByID) | **GET** /airEmissions/get/{id} | Get a AirEmission by id
[**listAirEmissions**](AirEmissionResourceApi.md#listAirEmissions) | **GET** /airEmissions/list | List all AirEmissions
[**updateAirEmission**](AirEmissionResourceApi.md#updateAirEmission) | **POST** /airEmissions/update | Update a AirEmission


<a name="createAirEmission"></a>
# **createAirEmission**
> AirEmission createAirEmission(body)

Create a AirEmission

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

var apiInstance = new Peidemo.AirEmissionResourceApi();

var body = new Peidemo.AirEmission(); // AirEmission | AirEmission description


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createAirEmission(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AirEmission**](AirEmission.md)| AirEmission description | 

### Return type

[**AirEmission**](AirEmission.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAirEmission"></a>
# **deleteAirEmission**
> deleteAirEmission(id)

Delete a AirEmission



### Example
```javascript
var Peidemo = require('peidemo');
var defaultClient = Peidemo.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Peidemo.AirEmissionResourceApi();

var id = "id_example"; // String | ID of AirEmission


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteAirEmission(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of AirEmission | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAirEmissionByID"></a>
# **getAirEmissionByID**
> AirEmission getAirEmissionByID(id)

Get a AirEmission by id



### Example
```javascript
var Peidemo = require('peidemo');
var defaultClient = Peidemo.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Peidemo.AirEmissionResourceApi();

var id = "id_example"; // String | AirEmission


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAirEmissionByID(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| AirEmission | 

### Return type

[**AirEmission**](AirEmission.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listAirEmissions"></a>
# **listAirEmissions**
> [AirEmission] listAirEmissions(opts)

List all AirEmissions



### Example
```javascript
var Peidemo = require('peidemo');
var defaultClient = Peidemo.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Peidemo.AirEmissionResourceApi();

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
apiInstance.listAirEmissions(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **String**| category | [optional] 

### Return type

[**[AirEmission]**](AirEmission.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateAirEmission"></a>
# **updateAirEmission**
> AirEmission updateAirEmission(body)

Update a AirEmission



### Example
```javascript
var Peidemo = require('peidemo');
var defaultClient = Peidemo.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Peidemo.AirEmissionResourceApi();

var body = new Peidemo.AirEmission(); // AirEmission | AirEmission description


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateAirEmission(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AirEmission**](AirEmission.md)| AirEmission description | 

### Return type

[**AirEmission**](AirEmission.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

