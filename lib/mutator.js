/**
 * custom jsDoc tag for Vuex mutations.
 * @module lib/mutator
 */
'use strict';

const tabler = require('./tabler');

exports.name = 'mutator';
exports.options = {
    mustHaveValue: true,
    mustNotHaveDescription: false,
    canHaveType: true,
    canHaveName: true,
    onTagged(doclet, tag) { /* eslint-disable-line */
        if (!doclet.mutators) {
            doclet.mutators = [];
        }

        doclet.mutators.push({
            name: tag.value.name,
            type: tag.value.type ? (tag.value.type.names.length === 1 ? tag.value.type.names[0] : tag.value.type.names) : '',
            description: tag.value.description || '',
            defaultvalue: tag.value.defaultvalue === undefined ? undefined : tag.value.defaultvalue
        });
    }
};

exports.newDocletHandler = function(e) {
    const parameters = e.doclet.mutators;
    if (parameters) {
        const table = tabler.build('mutators', parameters);
        e.doclet.description = `${table}`;
    }
};
