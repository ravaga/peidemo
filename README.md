# peidemo

Peidemo - JavaScript client for peidemo
No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.0.1
- Package version: 0.0.1
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install peidemo --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your peidemo from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('peidemo')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/peidemo
then install it via:

```shell
    npm install YOUR_USERNAME/peidemo --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Peidemo = require('peidemo');

var defaultClient = Peidemo.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix['Authorization'] = "Token"

var api = new Peidemo.AirEmissionResourceApi()

var body = new Peidemo.AirEmission(); // {AirEmission} AirEmission description


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createAirEmission(body, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://otpixel.satrdlab.upv.es:8080/peidemo/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Peidemo.AirEmissionResourceApi* | [**createAirEmission**](docs/AirEmissionResourceApi.md#createAirEmission) | **PUT** /airEmissions/create | Create a AirEmission
*Peidemo.AirEmissionResourceApi* | [**deleteAirEmission**](docs/AirEmissionResourceApi.md#deleteAirEmission) | **DELETE** /airEmissions/delete/{id} | Delete a AirEmission
*Peidemo.AirEmissionResourceApi* | [**getAirEmissionByID**](docs/AirEmissionResourceApi.md#getAirEmissionByID) | **GET** /airEmissions/get/{id} | Get a AirEmission by id
*Peidemo.AirEmissionResourceApi* | [**listAirEmissions**](docs/AirEmissionResourceApi.md#listAirEmissions) | **GET** /airEmissions/list | List all AirEmissions
*Peidemo.AirEmissionResourceApi* | [**updateAirEmission**](docs/AirEmissionResourceApi.md#updateAirEmission) | **POST** /airEmissions/update | Update a AirEmission
*Peidemo.ConfigResourceApi* | [**getConfig**](docs/ConfigResourceApi.md#getConfig) | **GET** /config/get | Get Config by id
*Peidemo.ConfigResourceApi* | [**setConfig**](docs/ConfigResourceApi.md#setConfig) | **PUT** /config/set | Create a Config
*Peidemo.EkpiResourceApi* | [**createEkpi**](docs/EkpiResourceApi.md#createEkpi) | **PUT** /Ekpis/create | Create a Ekpi
*Peidemo.EkpiResourceApi* | [**deleteEkpi**](docs/EkpiResourceApi.md#deleteEkpi) | **DELETE** /Ekpis/delete/{id} | Delete a Ekpi
*Peidemo.EkpiResourceApi* | [**getEkpiByID**](docs/EkpiResourceApi.md#getEkpiByID) | **GET** /Ekpis/get/{id} | Get a Ekpi by id
*Peidemo.EkpiResourceApi* | [**listEkpis**](docs/EkpiResourceApi.md#listEkpis) | **GET** /Ekpis/list | List all Ekpis
*Peidemo.EkpiResourceApi* | [**updateEkpi**](docs/EkpiResourceApi.md#updateEkpi) | **POST** /Ekpis/update | Update a Ekpi
*Peidemo.LoadMCRResourceApi* | [**createLoadMCR**](docs/LoadMCRResourceApi.md#createLoadMCR) | **PUT** /LoadMCRs/create | Create a LoadMCR
*Peidemo.LoadMCRResourceApi* | [**deleteLoadMCR**](docs/LoadMCRResourceApi.md#deleteLoadMCR) | **DELETE** /LoadMCRs/delete/{id} | Delete a LoadMCR
*Peidemo.LoadMCRResourceApi* | [**getLoadMCRByID**](docs/LoadMCRResourceApi.md#getLoadMCRByID) | **GET** /LoadMCRs/get/{id} | Get a LoadMCR by id
*Peidemo.LoadMCRResourceApi* | [**listLoadMCRs**](docs/LoadMCRResourceApi.md#listLoadMCRs) | **GET** /LoadMCRs/list | List all LoadMCRs
*Peidemo.LoadMCRResourceApi* | [**updateLoadMCR**](docs/LoadMCRResourceApi.md#updateLoadMCR) | **POST** /LoadMCRs/update | Update a LoadMCR
*Peidemo.ShipResourceApi* | [**createShip**](docs/ShipResourceApi.md#createShip) | **PUT** /ships/create | Create a Ship
*Peidemo.ShipResourceApi* | [**deleteShip**](docs/ShipResourceApi.md#deleteShip) | **DELETE** /ships/delete/{id} | Delete a Ship
*Peidemo.ShipResourceApi* | [**getShipByID**](docs/ShipResourceApi.md#getShipByID) | **GET** /ships/get/{id} | Get a Ship by id
*Peidemo.ShipResourceApi* | [**listShips**](docs/ShipResourceApi.md#listShips) | **GET** /ships/list | List all Ships
*Peidemo.ShipResourceApi* | [**updateShip**](docs/ShipResourceApi.md#updateShip) | **POST** /ships/update | Update a Ship
*Peidemo.SimulationResourceApi* | [**createSimulation**](docs/SimulationResourceApi.md#createSimulation) | **PUT** /Simulations/create | Create a Simulation
*Peidemo.SimulationResourceApi* | [**deleteSimulation**](docs/SimulationResourceApi.md#deleteSimulation) | **DELETE** /Simulations/delete/{id} | Delete a Simulation
*Peidemo.SimulationResourceApi* | [**executeModel**](docs/SimulationResourceApi.md#executeModel) | **POST** /Simulations/execute/{id} | Execute a Simulation by id
*Peidemo.SimulationResourceApi* | [**getSimulationByID**](docs/SimulationResourceApi.md#getSimulationByID) | **GET** /Simulations/get/{id} | Get a Simulation by id
*Peidemo.SimulationResourceApi* | [**listSimulations**](docs/SimulationResourceApi.md#listSimulations) | **GET** /Simulations/list | List all Simulations
*Peidemo.SimulationResourceApi* | [**updateSimulation**](docs/SimulationResourceApi.md#updateSimulation) | **POST** /Simulations/update | Update a Simulation
*Peidemo.SubindexResourceApi* | [**createSubindex**](docs/SubindexResourceApi.md#createSubindex) | **PUT** /Subindexs/create | Create a Subindex
*Peidemo.SubindexResourceApi* | [**deleteSubindex**](docs/SubindexResourceApi.md#deleteSubindex) | **DELETE** /Subindexs/delete/{id} | Delete a Subindex
*Peidemo.SubindexResourceApi* | [**getSubindexByID**](docs/SubindexResourceApi.md#getSubindexByID) | **GET** /Subindexs/get/{id} | Get a Subindex by id
*Peidemo.SubindexResourceApi* | [**listSubindexs**](docs/SubindexResourceApi.md#listSubindexs) | **GET** /Subindexs/list | List all Subindexs
*Peidemo.SubindexResourceApi* | [**updateSubindex**](docs/SubindexResourceApi.md#updateSubindex) | **POST** /Subindexs/update | Update a Subindex


## Documentation for Models

 - [Peidemo.AirEmission](docs/AirEmission.md)
 - [Peidemo.AirEmissionUnit](docs/AirEmissionUnit.md)
 - [Peidemo.AtmosphereEmission](docs/AtmosphereEmission.md)
 - [Peidemo.Config](docs/Config.md)
 - [Peidemo.Ekpi](docs/Ekpi.md)
 - [Peidemo.EkpiSimItem](docs/EkpiSimItem.md)
 - [Peidemo.IHConfig](docs/IHConfig.md)
 - [Peidemo.JsonNode](docs/JsonNode.md)
 - [Peidemo.LoadMCR](docs/LoadMCR.md)
 - [Peidemo.OTConfig](docs/OTConfig.md)
 - [Peidemo.Ship](docs/Ship.md)
 - [Peidemo.Simulation](docs/Simulation.md)
 - [Peidemo.SimulationInput](docs/SimulationInput.md)
 - [Peidemo.SimulationInputItem](docs/SimulationInputItem.md)
 - [Peidemo.SimulationOutput](docs/SimulationOutput.md)
 - [Peidemo.SimulationOutputItem](docs/SimulationOutputItem.md)
 - [Peidemo.Subindex](docs/Subindex.md)
 - [Peidemo.SubindexSimItem](docs/SubindexSimItem.md)
 - [Peidemo.Waste](docs/Waste.md)
 - [Peidemo.WasteWaterEmission](docs/WasteWaterEmission.md)


## Documentation for Authorization


### apikey

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header
