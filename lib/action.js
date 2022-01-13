/**
 * custom jsDoc tag for Vuex actions.
 * @module lib/action
 */
'use strict'

const logger = require('jsdoc/util/logger')

exports.name = 'action'
exports.options = {
  mustHaveValue: false,
  mustNotHaveDescription: true,
  canHaveName: true,
  canHaveType: false,
  onTagged (doclet, tag) { /* eslint-disable-line */
    doclet.action = {
      name: tag.value.name,
      defaultValue: tag.value.defaultvalue
    }
  }
}

exports.newDocletHandler = function (e) {
  const d = e.doclet
  if (!d.action) {
    return
  }
  const value = d.action.defaultValue
  let message = ''
  if (value) {
      message = `<i><strong>Vuex Action</strong> => Mutates state property</i> <code>${d.action.defaultValue}</code>`
  }

  if (value && d.description) {
      d.description = d.description + message
  }
  // d.memberof = d.memberof.replace('.actions', '')

  d.scope = 'action'
  d.kind = 'function'

}
