/**
 * custom jsDoc tag for Vuex getters.
 * @module lib/getter
 */
'use strict';

const tabler = require('./tabler');

exports.name = 'getter';
exports.options = {
    mustHaveValue: true,
    mustNotHaveDescription: false,
    canHaveType: true,
    canHaveName: true,
    onTagged(doclet, tag) { /* eslint-disable-line */
        if (!doclet.getters) {
            doclet.getters = [];
        }

        doclet.getters.push({
            name: tag.value.name,
            type: tag.value.type ? (tag.value.type.names.length === 1 ? tag.value.type.names[0] : tag.value.type.names) : '',
            description: tag.value.description || '',
            defaultvalue: tag.value.defaultvalue === undefined ? undefined : tag.value.defaultvalue
        });
    }
};

exports.newDocletHandler = function(e) {
    const parameters = e.doclet.getters;
    if (parameters) {
        const table = tabler.build('getters', parameters);
        e.doclet.description = `${table}`;
    }
};
