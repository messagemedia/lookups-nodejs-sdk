# MessageMedia Lookups NodeJS SDK
[![Travis Build Status](https://travis-ci.org/messagemedia/lookups-nodejs-sdk.svg?branch=master)](https://travis-ci.org/messagemedia/lookups-nodejs-sdk)

The MessageMedia Lookups API provides a number of endpoints for validating the phone numbers you’re sending to by checking their validity, type and carrier records.

## ⭐️ Installing via NPM
Now install messagemedia-messages-sdk via npm by using:
* `npm install messagemedia-lookups-sdk`

Alternatively, add the following to the dependencies section of your package.json:
* `"messagemedia-lookups-sdk": "^1.0.0"`

## 🎬 Get Started
It's easy to get started. Simply enter the API Key and secret you obtained from the [MessageMedia Developers Portal](https://developers.messagemedia.com) into the code snippet below and a mobile number you wish to send to.

### 👀 Lookup a number
```javascript
const sdk = require('messagemedia-lookups-sdk');

// Configuration parameters and credentials
sdk.Configuration.basicAuthUserName = "YOUR_API_KEY"; // The username to use with basic authentication
sdk.Configuration.basicAuthPassword = "YOUR_API_SECRET"; // The password to use with basic authentication

var controller = sdk.LookupsController;

var phoneNumber = "YOUR_MOBILE_NUMBER";
var options = 'carrier,type';

controller.getLookupAPhoneNumber(phoneNumber, options, function(error, response, context) {
  console.log(response)
});
```

## 📕 Documentation
The NodeJS SDK Documentation can be viewed [here](DOCUMENTATION.md)

## 😕 Got Stuck?
Please contact developer support at developers@messagemedia.com or check out the developer portal at [developers.messagemedia.com](https://developers.messagemedia.com/)
