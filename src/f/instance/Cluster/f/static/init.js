
export default (
    (Cluster, ObjectFromEntries, tables) => {
        var
            cluster = (
                new Cluster(
                    tables,
                    ObjectFromEntries(tables)
                )
            ),
            sort_keys = cluster.sort_keys
        ;

        cluster.keys_link(tables, sort_keys);

        return (cluster);
    }
);
