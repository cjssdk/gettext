/**
 * @license The MIT License (MIT)
 * @copyright Stanislav Kalashnik <darkpark.main@gmail.com>
 */

/* eslint no-path-concat: 0 */

'use strict';


/**
 * Translations handler.
 *
 * @constructor
 *
 * @param {Object} config init parameters
 */
function Gettext ( config ) {
    var data, meta;

    // sanitize
    config   = config || {};
    data     = config.data || {};
    data[''] = data[''] || {};

    // shortcut
    meta = config.meta;

    /**
     * Display the native language translation of a textual message.
     *
     * @param {string} msgId textual message
     *
     * @return {string} translated text
     */
    this.gettext = function ( msgId ) {
        return data[''][msgId] || msgId;
    };


    /**
     * The "p" in "pgettext" stands for "particular": fetches a particular translation of the textual message.
     *
     * @param {string} context message context
     * @param {string} msgId textual message
     *
     * @return {string} translated text
     */
    this.pgettext = function ( context, msgId ) {
        return data[context] && data[context][msgId] || msgId;
    };


    /**
     * Display the native language translation of a textual message whose grammatical form depends on a number.
     *
     * @param {string} msgId textual message in a singular form
     * @param {string} plural textual message in a plural form
     * @param {number} value message number
     *
     * @return {string} translated text
     */
    this.ngettext = function ( msgId, plural, value ) {
        /* eslint no-unused-vars: 0 */
        /* eslint no-eval: 0 */
        /* eslint id-length: 0 */
        var n;

        if ( DEVELOP ) {
            if ( Number(value) !== value ) {
                throw new Error(__filename + ': value must be a number');
            }
        }

        if ( data && meta ) {
            // translation
            return data[''][msgId][eval('n = ' + value + '; ' + meta.plural)];
        }

        // english
        return value === 1 ? msgId : plural;
    };
}


// correct constructor name
Gettext.prototype.constructor = Gettext;


// public
module.exports = Gettext;
