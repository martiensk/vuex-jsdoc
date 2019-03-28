
/**
 * Custom jsDoc tag to document the Getters object.
 * @module lib/headerparam
 */

'use strict';

exports.name = 'getters';

exports.options = {
    mustHaveValue: false,
    mustNotHaveDescription: true,
    canHaveType: false,
    canHaveName: false,
    onTagged(doclet) { /* eslint-disable-line */
        doclet.route = {};
    }
};

exports.newDocletHandler = function(e) {
    const route = e.doclet.route;
    if (route) {
        e.doclet.scope = 'route';
        e.doclet.description = '<h5>Vuex Getters:</h5>';
    }
};
