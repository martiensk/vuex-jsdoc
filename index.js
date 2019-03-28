/**
 * Define custon tags for documenting Vuex state, getters, mutations and actions properties.
 * @module jsdoc-vuex-plugin
 */

const getterTag = require('./lib/getter');
const getterObjectTag = require('./lib/gettersObject');

exports.defineTags = (dictionary) => {
    dictionary.defineTag(getterTag.name, getterTag.options);
    dictionary.defineTag(getterObjectTag.name, getterObjectTag.options);
};

exports.handlers = {
    newDoclet(e) { /* eslint-disable-line */
        getterTag.newDocletHandler(e);
        getterObjectTag.newDocletHandler(e);
    }
};
