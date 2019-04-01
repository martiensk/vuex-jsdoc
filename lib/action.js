/**
 * custom jsDoc tag for Vuex actions.
 * @module lib/action
 */

'use strict';

exports.name = 'action';
exports.options = {
    mustHaveValue: false,
    mustNotHaveDescription: true,
    canHaveName: true,
    canHaveType: false,
    onTagged(doclet, tag) { /* eslint-disable-line */
        doclet.action = {
            name: tag.value.name,
            defaultValue: tag.value.defaultvalue === undefined ? undefined : tag.value.defaultvalue
        };
    }
};

exports.newDocletHandler = function(e) {
    const action = e.doclet.action;
    if (action) {
        e.doclet.scope = 'action';
        e.doclet.kind = 'function';
        e.doclet.memberof = e.doclet.memberof.replace('.actions', '');
        e.doclet.description = `${e.doclet.description}
                                <br/><i><strong>Vuex Action</strong> => Mutates state property</i><code>${action.defaultValue}</code>`;
    }
};
