import {
    Table,
    Cluster,
    TableInit,
    ClusterInit,
    init_tables,
} from '../../../../i.js';

export default (
    (templates) => {
        var
            tables = (
                init_tables(
                    Table,
                    TableInit,
                    globalThis.Array,
                    templates,
                )
            ),
        
            cluster =
                ClusterInit(
                    Cluster,
                    globalThis.Object.fromEntries,
                    tables
                )
        ;
        return cluster;
    }
)