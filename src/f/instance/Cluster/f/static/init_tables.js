
export default (
    (Table,TableInit,Array,templates) => {
        var
            i = 0,
            l = templates.length,
            template = null,
            tables = Array(l).fill(null)
        ;
        for(;i<l;i++){
            template = templates[i];
            tables[i] =
                TableInit(
                    Table,
                    template
                );
        }
        return (tables)
    }
);
