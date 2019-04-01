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
    canHaveType: true,
    onTagged(doclet, tag) { /* eslint-disable-line */
        doclet.action = {
            name: tag.value.name,
            type: tag.value.type ? (tag.value.type.names.length === 1 ? tag.value.type.names[0] : tag.value.type.names) : ''
        };
    }
};

exports.newDocletHandler = function(e) {
    const action = e.doclet.action;
    if (action) {
        console.log(action);
        e.doclet.scope = 'action';
        e.doclet.kind = 'member';
        e.doclet.memberof = e.doclet.memberof.replace('.actions', '');
        console.log(e.doclet);
        e.doclet.description = `<table class="params">
                                <thead><tr><th>Method</th><th class="last">Path</th></tr></thead>
                                <tr>
                                <td class="name last">${action.name}</td>
                                </tr>
                                </table>
                                ${e.doclet.description}`;
    }
};
