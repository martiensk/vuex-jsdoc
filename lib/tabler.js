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

const buildTableEntry = (param, columnInfo, title) => { /* eslint-disable-line */
    const attributeCell = columnInfo.showAttributes ? `<td class="attributes">${param.optional}</td>` : '';
    let defaultCell = '';

    if (columnInfo.showDefaultValue) {
        switch (title) {
        case 'getters':
        case 'mutators':
            defaultCell = `<td class="default">${param.defaultvalue === undefined ? '' : `<code>${param.defaultvalue}</code>`}</td>`;
            break;
        default:
            defaultCell = `<td class="default">${param.defaultvalue === undefined ? '' : param.defaultvalue}</td>`;
            break;
        }
    }

    return `<tr>
            <td class="name"><code>${param.name}</code></td>
            <td class="type">${param.type}</td>
            ${attributeCell}
            ${defaultCell}
            <td class="description last">${param.description}</td>
            </tr>`;
};

const buildTableHeader = (columnInfo, title) => { /* eslint-disable-line */
    const attributeHeader = columnInfo.showAttributes ? '<th>Attributes</th>' : '';
    let defaultHeader = columnInfo.showDefaultValue ? '<th>Default Value</th>' : '';
    let typeHeader = 'Type';

    switch (title) {
    case 'getters':
        typeHeader = 'Returns Type';
        defaultHeader = '<th>Returns State Property</th>';
        break;
    case 'mutators':
        typeHeader = 'Accepts Type';
        defaultHeader = '<th>Mutates State Property</th>';
        break;
    default:
        break;
    }

    return `<thead>
                <tr>
                <th>Name</th>
                <th>${typeHeader}</th>
                ${attributeHeader}
                ${defaultHeader}
                <th class="last">Description</th>
                </tr>
            </thead>`;
};

exports.build = (title, params) => {
    const columnInfo = extraColumnInfo(params);
    const paramTableEntries = [];

    params.forEach((param) => {
        paramTableEntries.push(buildTableEntry(param, columnInfo, title));
    });

    return `<table class="params">
            ${buildTableHeader(columnInfo, title)}
            ${paramTableEntries.join('')}
            </table>`;
};
