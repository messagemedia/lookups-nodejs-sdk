/**
  * @module messagemedia-lookups
  *
  * The MessageMedia Messages API provides a number of endpoints for validating the phone numbers
  * you’re sending to by checking their validity, type and carrier records.
  */

'use strict';

const Configuration = require('./configuration');
const Logger = require('./LogConfig');
const LookupsController = require('./Controllers/LookupsController');
const LookupAPhoneNumberResponse = require('./Models/LookupAPhoneNumberResponse');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of messagemedia-lookups
    Configuration,
    Logger,
    // controllers of messagemedia-lookups
    LookupsController,
    // models of messagemedia-lookups
    LookupAPhoneNumberResponse,
    // exceptions of messagemedia-lookups
    APIException,
};

initializer.Logger.LogConfig();

module.exports = initializer;
