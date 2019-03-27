/**
 * This module defines a custom jsDoc tag.
 * It allows you to document the authentication of a route.
 * @module lib/authentication
 */

'use strict';

exports.name = 'getter';
exports.options = {
    mustHaveValue: true,
    mustNotHaveDescription: false,
    canHaveType: true,
    canHaveName: true,
    onTagged(doclet, tag) { /* eslint-disable-line */
        doclet.getter = tag.value;
        doclet.description = `${doclet.description}
                          <h5>Getter</h5>
                          <p>${doclet.getter}</p>`;
    }
};
exports.newDocletHandler = function(e) { /* Do Nothing */ };
