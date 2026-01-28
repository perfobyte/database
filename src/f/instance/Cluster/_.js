import * as f from './f/i.js';

function Cluster(
    tables,
    map,
) {
    this.tables = tables;
    this.map = map;
};

Cluster.prototype = f;

export default Cluster;
