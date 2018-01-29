/**
 * messagemedia-lookups
 *
 * This file was automatically generated for MessageMedia by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of LookupAPhoneNumberResponse
 */
class LookupAPhoneNumberResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.countryCode = this.constructor.getValue(obj.countryCode || obj.country_code);
        this.phoneNumber = this.constructor.getValue(obj.phoneNumber || obj.phone_number);
        this.type = this.constructor.getValue(obj.type);
        this.carrier = this.constructor.getValue(obj.carrier);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'countryCode', realName: 'country_code' },
            { name: 'phoneNumber', realName: 'phone_number' },
            { name: 'type', realName: 'type' },
            { name: 'carrier', realName: 'carrier' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = LookupAPhoneNumberResponse;
