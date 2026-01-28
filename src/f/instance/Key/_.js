import * as f from './f/i.js';

function Key(
    name,
    size,
    origin,
    table,
) {
    this.name = name;
    this.size = size;

    this.origin = origin;
    this.table = table;
};

Key.prototype = f;

export default Key;
