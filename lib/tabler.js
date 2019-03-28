/**
 * This module converts an array of parameter objects into an HTML table.
 * @module parameterTableBuilder
 */

'use strict';

const extraColumnInfo = (params) => { /* eslint-disable-line */
    const result = {
        showAttributes: false,
        showDefaultValue: false
    };

    params.forEach((param) => {
        result.showAttributes = result.showAttributes || param.optional;
        result.showDefaultValue = result.showDefaultValue || param.defaultvalue !== undefined;
    });

    return result;
};

const buildTableEntry = (param, columnInfo) => { /* eslint-disable-line */
    const attributeCell = columnInfo.showAttributes ? `<td class="attributes">${param.optional}</td>` : '';
    const defaultCell = columnInfo.showDefaultValue ? `<td class="default">${param.defaultvalue === undefined ? '' : param.defaultvalue}</td>` : '';

    return `<tr>
            <td class="name"><code>${param.name}</code></td>
            <td class="type">${param.type}</td>
            ${attributeCell}
            ${defaultCell}
            <td class="description last">${param.description}</td>
            </tr>`;
};

const buildTableHeader = (columnInfo, title) => { /* eslint-disable-line */
    const attributeHeader = columnInfo.showAttributes ? 'Attributes' : '';
    const defaultHeader = columnInfo.showDefaultValue ? 'Default Value' : '';
    const typeHeader = title === 'Vuex Getters' ? 'Return Type' : 'Type';
    return `<thead>
                <tr>
                <th>Name</th>
                <th>${typeHeader}</th>
                <th>${attributeHeader}</th>
                <th>${defaultHeader}</th>
                <th class="last">Description</th>
                </tr>
            </thead>`;
};

exports.build = (title, params) => {
    const columnInfo = extraColumnInfo(params);
    const paramTableEntries = [];

    params.forEach((param) => {
        paramTableEntries.push(buildTableEntry(param, columnInfo));
    });

    return `<h5>${title}:</h5>
            <table class="params">
            ${buildTableHeader(columnInfo, title)}
            ${paramTableEntries.join('')}
            </table>`;
};
