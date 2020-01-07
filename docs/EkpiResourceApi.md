# Peidemo.EkpiResourceApi

All URIs are relative to *http://otpixel.satrdlab.upv.es:8080/peidemo/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEkpi**](EkpiResourceApi.md#createEkpi) | **PUT** /Ekpis/create | Create a Ekpi
[**deleteEkpi**](EkpiResourceApi.md#deleteEkpi) | **DELETE** /Ekpis/delete/{id} | Delete a Ekpi
[**getEkpiByID**](EkpiResourceApi.md#getEkpiByID) | **GET** /Ekpis/get/{id} | Get a Ekpi by id
[**listEkpis**](EkpiResourceApi.md#listEkpis) | **GET** /Ekpis/list | List all Ekpis
[**updateEkpi**](EkpiResourceApi.md#updateEkpi) | **POST** /Ekpis/update | Update a Ekpi


<a name="createEkpi"></a>
# **createEkpi**
> Ekpi createEkpi(body)

Create a Ekpi

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

var apiInstance = new Peidemo.EkpiResourceApi();

var body = new Peidemo.Ekpi(); // Ekpi | Ekpi description


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createEkpi(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Ekpi**](Ekpi.md)| Ekpi description | 

### Return type

[**Ekpi**](Ekpi.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteEkpi"></a>
# **deleteEkpi**
> deleteEkpi(id)

Delete a Ekpi



### Example
```javascript
var Peidemo = require('peidemo');
var defaultClient = Peidemo.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Peidemo.EkpiResourceApi();

var id = "id_example"; // String | ID of Ekpi


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteEkpi(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of Ekpi | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getEkpiByID"></a>
# **getEkpiByID**
> Ekpi getEkpiByID(id)

Get a Ekpi by id



### Example
```javascript
var Peidemo = require('peidemo');
var defaultClient = Peidemo.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Peidemo.EkpiResourceApi();

var id = "id_example"; // String | Ekpi


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEkpiByID(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Ekpi | 

### Return type

[**Ekpi**](Ekpi.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listEkpis"></a>
# **listEkpis**
> [Ekpi] listEkpis(opts)

List all Ekpis



### Example
```javascript
var Peidemo = require('peidemo');
var defaultClient = Peidemo.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Peidemo.EkpiResourceApi();

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
apiInstance.listEkpis(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **String**| category | [optional] 

### Return type

[**[Ekpi]**](Ekpi.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateEkpi"></a>
# **updateEkpi**
> Ekpi updateEkpi(body)

Update a Ekpi



### Example
```javascript
var Peidemo = require('peidemo');
var defaultClient = Peidemo.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Peidemo.EkpiResourceApi();

var body = new Peidemo.Ekpi(); // Ekpi | Ekpi description


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateEkpi(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Ekpi**](Ekpi.md)| Ekpi description | 

### Return type

[**Ekpi**](Ekpi.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

