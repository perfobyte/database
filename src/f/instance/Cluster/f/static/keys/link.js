

export default (
    (tables, sort_keys) => {
        var
            i = 0,
            l = tables.length,
            table = null,
            
            keys = null,
            key = null,
            key_i = 0,
            key_l = 0
        ;
        for (;i<l;i++) {
            table = tables[i];
            
            keys = table.keys;
            
            keys.sort(sort_keys);

            key_i = 0;
            key_l = keys.length;

            for (;key_i < key_l; key_i++) {
                key = keys[key_i];
                key.link(table);
            }
        };
    }
);
