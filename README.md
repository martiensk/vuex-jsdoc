# jsdoc-vuex-plugin
A [JsDoc](http://usejsdoc.org/index.html) plugin for documenting [Vuex](https://vuex.vuejs.org/) modules.
## Why would I do this?
I'm a sucker for clean and concise documentation. I used to document my Vuex modules using namespaces and typedefs already built in in JsDoc, but after a while found these mechanisms frustrating as they just could not do what I wanted them to.
## So?
This plugin creates custom tags for Vuex getters, mutations and actions.
# Installation
You need to have node-js set up and configured. Next, you need to install JsDoc:
```
npm i -D jsdoc
```
After that, you should install this plugin as a global package:
```
npm i -g jsdoc-vuex-plugin
```
To enable the plugin in JsDoc, add the relevant configuration option in your jsdoc.conf:
### __Example:__
``` json
{
  "tags": {
    "allowUnknownTags": true
  },
  "source": {
    "include": ["."],
    "exclude": [ "node_modules" ],
    "includePattern": ".+\\.js(doc|x)?$",
    "excludePattern": ""
  },
  "plugins": ["jsdoc-vuex-plugin"],
  "templates": {
    "cleverLinks": false,
    "monospaceLinks": false
  }
}
```

Run JsDoc with the `--config` flag and point to the path of your jsdoc.conf.

# Vuex tags
## The state
I have not bothered to create custom tags for the Vuex state. To document the Vuex state I have selected to simply use the existing _@property_ tag, like so:
``` javascript
/**
 * The Vuex 'state' object.
 * @name State
 * @type {object}
 * @property {boolean} boolProp This property is a boolean.
 * @property {string} strProp This property is a string.
 * @property {number} numProp This property is a number.
 */
```
## Getters

The _@getter_ tag uses the following syntax:

@getter {return_type} getter_name=state_property_returned And a description.

### Example:
``` javascript
/**
 * The module 'getters' object.
 * @name Getters
 * @type {object}
 * @getter {boolean} getBoolProp=boolProp Returns a boolean property.
 * @getter {string} getStrProp=strProp Returns a string property.
 * @getter {boolean} getNumProp=numProp Returns a property that is a number.
 */
```

<h4 class="name" id="~Getters"><span class="type-signature">(inner) </span>Getters<span class="type-signature"> :object</span></h4>
<div class="description">
    <table class="params">
            <thead>
                <tr>
                <th>Name</th>
                <th>Returns Type</th>
                <th>Returns State Property</th>
                <th class="last">Description</th>
                </tr>
            </thead>
            <tbody><tr>
            <td class="name"><code>getBoolProp</code></td>
            <td class="type">boolean</td>
            <td class="default"><code>boolProp</code></td>
            <td class="description last">Returns a boolean property.</td>
            </tr><tr>
            <td class="name"><code>getStrProp</code></td>
            <td class="type">string</td>
            <td class="default"><code>strProp</code></td>
            <td class="description last">Returns a string property.</td>
            </tr><tr>
            <td class="name"><code>getNumProp</code></td>
            <td class="type">number</td>
            <td class="default"><code>numProp</code></td>
            <td class="description last">Returns a property that is a number.</td>
            </tr>
            </tbody></table>
</div>
    <h5>Type:</h5>
    <ul>
        <li>
<span class="param-type">object</span>
        </li>
    </ul>

## Mutators

The _@mutator tag uses the following syntax:

@mutator {accepts_type} mutator_name=state_property_to_mutate And a description.

### Example:
``` javascript
/**
 * The module 'setters' object.
 * @name Getters
 * @type {object}
 * @mutator {boolean} setBoolProp=boolProp Sets the state boolean property.
 * @mutator {string} setStrProp=strProp Sets the state string property.
 * @mutator {number} setNumProp=numProp Sets the state numerical property.
 */
```

<h4 class="name" id="~Mutations"><span class="type-signature">(inner) </span>Mutations<span class="type-signature"> :object</span></h4>




<div class="description">
    <table class="params">
            <thead>
                <tr>
                <th>Name</th>
                <th>Accepts Type</th>
                <th>Mutates State Property</th>
                <th class="last">Description</th>
                </tr>
            </thead>
            <tbody><tr>
            <td class="name"><code>setBoolProp</code></td>
            <td class="type">boolean</td>
            <td class="default"><code>boolProp</code></td>
            <td class="description last">Sets the state boolean property.</td>
            </tr><tr>
            <td class="name"><code>setStrProp</code></td>
            <td class="type">string</td>
            <td class="default"><code>strProp</code></td>
            <td class="description last">Sets the state string property.</td>
            </tr><tr>
            <td class="name"><code>setNumProp</code></td>
            <td class="type">number</td>
            <td class="default"><code>numProp</code></td>
            <td class="description last">Sets the state numerical property.</td>
            </tr>
            </tbody></table>
</div>
    <h5>Type:</h5>
    <ul>
        <li>
<span class="param-type">object</span>
        </li>
    </ul>

## Actions

The _@action_ tag should not be documented liek an object, but rather like a method. I chose this approach due to their asynchronous nature.

The _@action_ tag should be documented like this:

@action action_name=state_property_affected

### Here is an example:
``` JavaScript
/**
 * Blah blah blah description.
 * @action updateStrProp=strProp
 * @param {string} word A string parameter for example purposes.
 * @returns {void}
 */
updateStrProp({ commit }, word) {
    const ajaxResult = getResult();/// Some Ajax here...
    commit('setStrProp', `${word} blah blah blah ${ajaxResult}`);
}
```

<h4 class="name" id="updateTrackingLb">
                <span class="type-signature"><span class="icon green">action</span> </span>updateTrackingLb<span class="signature">(metric)</span><span class="type-signature"> → {void}</span>
                </h4>
<dd>
    <div class="description">
        Blah blah blah description.
                                <br><i><strong>Vuex Action</strong> =&gt; Mutates state property</i>&nbsp;<code>strProp</code>
    </div>
    <div class="container-params">
        <h5>Parameters:</h5>
<table class="params">
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th class="last">Description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
                <td class="name"><code>word</code></td>
            <td class="type">
<span class="param-type">string</span>
            </td>
            <td class="description last">A string parameter for example purposes.</td>
        </tr>
    </tbody>
</table>
    </div>
    <div class="container-returns">
        <h5>Returns:</h5>
<span class="param-type">void</span>

# Contributing
Bug reports and pull requests are welcome.
# License 
MIT
# Special Thanks
To __Brad van der Laan__ who authored the awesome [jsdoc-route-plugin](https://github.com/bvanderlaan/jsdoc-route-plugin), a project that provides custom JsDoc tags inteded to be used when documenting Express routes, and also the project that I very shamelessly used as an example when I wrote this plugin.