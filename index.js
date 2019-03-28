/**
 * Define custon tags for documenting Vuex state, getters, mutations and actions properties.
 * @module jsdoc-vuex-plugin
 */

const getterTag = require('./lib/getter');
const mutatorTag = require('./lib/mutator');

exports.defineTags = (dictionary) => {
    dictionary.defineTag(getterTag.name, getterTag.options);
    dictionary.defineTag(mutatorTag.name, mutatorTag.options);
};

exports.handlers = {
    newDoclet(e) { /* eslint-disable-line */
        getterTag.newDocletHandler(e);
        mutatorTag.newDocletHandler(e);
    }
};
