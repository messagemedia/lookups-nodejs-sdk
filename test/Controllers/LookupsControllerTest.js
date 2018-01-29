/*
 * messagemedia-lookups
 *
 * This file was automatically generated for MessageMedia by APIMATIC v2.0 ( https://apimatic.io )
 */
 'use strict';

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require("../TestHelper");
const APIHelper = require("../../lib/APIHelper");
const testerlib = require("../../lib");
const testConfiguration = require("../TestBootstrap");

const controller = testerlib.LookupsController;
const LookupAPhoneNumberResponse = testerlib.LookupAPhoneNumberResponse;

describe("LookupsController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Use the Lookups API to find information about a phone number.
A request to the lookups API has the following format:
```/v1/lookups/phone/{phone_number}?options={carrier,type}```
The `{phone_number}` parameter is a required field and should be set to the phone number to be looked up.
The options query parameter can also be used to request additional information about the phone number.
By default, a request will only return the `country_code` and `phone_number` properties in the response.
To request details about the the carrier, include `carrier` as a value of the options parameter.
To request details about the type, include `type` as a value of the options parameter. To pass multiple values
to the options parameter, use a comma separated list, i.e. `carrier,type`.
A successful request to the lookups endpoint will return a response body as follows:
```json
{
  "country_code": "AU",
  "phone_number": "+61491570156",
  "type": "mobile",
  "carrier": {
    "name": "Telstra"
  }
}
```
Each property in the response body is defined as follows:
- ```country_code``` ISO ALPHA 2 country code of the phone number
- ```phone_number``` E.164 formatted phone number
- ```type``` The type of number. This can be ```"mobile"``` or ```"landline"```
- ```carrier``` Holds information about the specific carrier (if available)
  - ```name``` The carrier's name as reported by the network
     */
    it("should testLookupAPhoneNumber1 response", function testLookupAPhoneNumber1Test(done) {
        // parameters for the API call
        let phoneNumber = '+61491570156';
        let options = 'carrier, type';

        controller.getLookupAPhoneNumber(phoneNumber, options, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Content-Type'] = null;
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            assert.isNotNull(response);
            assert.equal('{"country_code":"AU","phone_number":"+61491570156","type":"mobile","carrier":{"name":"Telstra"}}', context.response.body);
            done();
        });
    });

});
