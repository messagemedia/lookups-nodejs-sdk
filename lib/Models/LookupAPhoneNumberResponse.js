/**
 * messagemedia-lookups
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
        this.result = this.constructor.getValue(obj.result);
        this.imsi = this.constructor.getValue(obj.imsi);
        this.location = this.constructor.getValue(obj.location);
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
            { name: 'result', realName: 'result' },
            { name: 'imsi', realName: 'imsi' },
            { name: 'location', realName: 'location' }
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
