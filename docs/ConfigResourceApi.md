# Peidemo.ConfigResourceApi

All URIs are relative to *http://otpixel.satrdlab.upv.es:8080/peidemo/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getConfig**](ConfigResourceApi.md#getConfig) | **GET** /config/get | Get Config by id
[**setConfig**](ConfigResourceApi.md#setConfig) | **PUT** /config/set | Create a Config


<a name="getConfig"></a>
# **getConfig**
> Config getConfig()

Get Config by id



### Example
```javascript
var Peidemo = require('peidemo');
var defaultClient = Peidemo.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Peidemo.ConfigResourceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getConfig(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Config**](Config.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="setConfig"></a>
# **setConfig**
> Config setConfig(body)

Create a Config

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

var apiInstance = new Peidemo.ConfigResourceApi();

var body = new Peidemo.Config(); // Config | Config description


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setConfig(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Config**](Config.md)| Config description | 

### Return type

[**Config**](Config.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

