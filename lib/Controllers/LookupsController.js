/**
 * messagemedia-lookups
*/

'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');
const _logger = require('winston');

class LookupsController {
    /**
     * Use the Lookups API to find information about a phone number.
     * A request to the lookups API has the following format:
     * ```/v1/lookups/phone/{phone_number}?options={carrier,type}```
     * The `{phone_number}` parameter is a required field and should be set to the phone number
     * to be looked up.
     * The options query parameter can also be used to request additional information about the
     * phone number.
     * By default, a request will only return the `country_code` and `phone_number` properties in
     * the response.
     * To request details about the the carrier, include `carrier` as a value of the options
     * parameter.
     * To request details about the type, include `type` as a value of the options parameter. To
     * pass multiple values
     * to the options parameter, use a comma separated list, i.e. `carrier,type`.
     * A successful request to the lookups endpoint will return a response body as follows:
     * ```json
     * {
     * "country_code": "AU",
     * "phone_number": "+61491570156",
     * "type": "mobile",
     * "carrier": {
     * "name": "Telstra"
     * }
     * }
     * ```
     * Each property in the response body is defined as follows:
     * - ```country_code``` ISO ALPHA 2 country code of the phone number
     * - ```phone_number``` E.164 formatted phone number
     * - ```type``` The type of number. This can be ```"mobile"``` or ```"landline"```
     * - ```carrier``` Holds information about the specific carrier (if available)
     * - ```name``` The carrier's name as reported by the network
     *
     * @param {string} phoneNumber The phone number to be looked up
     * @param {string} options (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getLookupAPhoneNumber(phoneNumber, options, callback) {
        _logger.info('getLookupAPhoneNumber being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for getLookupAPhoneNumber');
        const _baseUri = _configuration.BASEURI;

        let _queryBuilder = `${_baseUri}${'/v1/lookups/phone/{phone_number}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            phone_number: phoneNumber,
        });

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            options,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for getLookupAPhoneNumber');
        const _headers = {
            accept: 'application/json',
            'user-agent': 'messagemedia-lookups-nodejs-sdk-1.0.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };

        if(_configuration.basicAuthUserName.length != 20 || _configuration.basicAuthPassword.length != 30) {
            console.log('~~~~ It appears as though your REST API Keys are invalid. Please check and make sure they are correct. (Incorrect Length) ~~~~~')
          }

        _logger.debug(`'Raw request for getLookupAPhoneNumber  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for getLookupAPhoneNumber...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'getLookupAPhoneNumber');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for getLookupAPhoneNumber...  > ${JSON.stringify(_response)}'`);
                    let parsed = JSON.parse(_response.body);
                    _logger.info('Deserializing response for getLookupAPhoneNumber');
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'LookupAPhoneNumberResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 404) {
                    _baseController.printErrorLog(_response.statusCode, 'getLookupAPhoneNumber');
                    const _err = { errorMessage: 'Number was invalid',
                        errorCode: 404,
                        errorResponse: _response.body,
                    };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    _logger.info('Validating response for getLookupAPhoneNumber ');
                    errorResponse = _baseController.validateResponse(_context, 'getLookupAPhoneNumber');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

}

module.exports = LookupsController;
