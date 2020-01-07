# Peidemo.SimulationResourceApi

All URIs are relative to *http://otpixel.satrdlab.upv.es:8080/peidemo/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSimulation**](SimulationResourceApi.md#createSimulation) | **PUT** /Simulations/create | Create a Simulation
[**deleteSimulation**](SimulationResourceApi.md#deleteSimulation) | **DELETE** /Simulations/delete/{id} | Delete a Simulation
[**executeModel**](SimulationResourceApi.md#executeModel) | **POST** /Simulations/execute/{id} | Execute a Simulation by id
[**getSimulationByID**](SimulationResourceApi.md#getSimulationByID) | **GET** /Simulations/get/{id} | Get a Simulation by id
[**listSimulations**](SimulationResourceApi.md#listSimulations) | **GET** /Simulations/list | List all Simulations
[**updateSimulation**](SimulationResourceApi.md#updateSimulation) | **POST** /Simulations/update | Update a Simulation


<a name="createSimulation"></a>
# **createSimulation**
> Simulation createSimulation(body)

Create a Simulation

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

var apiInstance = new Peidemo.SimulationResourceApi();

var body = new Peidemo.Simulation(); // Simulation | Simulation description


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSimulation(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Simulation**](Simulation.md)| Simulation description | 

### Return type

[**Simulation**](Simulation.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSimulation"></a>
# **deleteSimulation**
> deleteSimulation(id)

Delete a Simulation



### Example
```javascript
var Peidemo = require('peidemo');
var defaultClient = Peidemo.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Peidemo.SimulationResourceApi();

var id = "id_example"; // String | ID of Simulation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteSimulation(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of Simulation | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="executeModel"></a>
# **executeModel**
> executeModel(id, body)

Execute a Simulation by id



### Example
```javascript
var Peidemo = require('peidemo');
var defaultClient = Peidemo.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Peidemo.SimulationResourceApi();

var id = "id_example"; // String | model

var body = new Peidemo.JsonNode(); // JsonNode | Input body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.executeModel(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| model | 
 **body** | [**JsonNode**](JsonNode.md)| Input body | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSimulationByID"></a>
# **getSimulationByID**
> Simulation getSimulationByID(id)

Get a Simulation by id



### Example
```javascript
var Peidemo = require('peidemo');
var defaultClient = Peidemo.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Peidemo.SimulationResourceApi();

var id = "id_example"; // String | Simulation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSimulationByID(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Simulation | 

### Return type

[**Simulation**](Simulation.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listSimulations"></a>
# **listSimulations**
> [Simulation] listSimulations()

List all Simulations



### Example
```javascript
var Peidemo = require('peidemo');
var defaultClient = Peidemo.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Peidemo.SimulationResourceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listSimulations(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Simulation]**](Simulation.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateSimulation"></a>
# **updateSimulation**
> Simulation updateSimulation(body)

Update a Simulation



### Example
```javascript
var Peidemo = require('peidemo');
var defaultClient = Peidemo.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new Peidemo.SimulationResourceApi();

var body = new Peidemo.Simulation(); // Simulation | Simulation description


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateSimulation(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Simulation**](Simulation.md)| Simulation description | 

### Return type

[**Simulation**](Simulation.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

