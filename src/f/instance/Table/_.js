import * as f from './f/i.js';

function Table(
    template,
    keys,
    size,
    length,
) {
    this.template = template;
    this.keys = keys;
    this.size = size;
    this.length = length;
    
    this["0"] = this.name = template.name;
    this["1"] = this;
};

Table.prototype = f;

export default Table;
