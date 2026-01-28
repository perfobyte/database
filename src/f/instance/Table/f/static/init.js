

export default (
    (Table, template) => {
        var
            proto = template.prototype,
            TableProto = Table.prototype,

            size_step = TableProto.size_step,
            reduce_sm = TableProto.reduce_sm,

            keys = proto.keys,
            
            size_current = keys.reduce(reduce_sm,0),
            size_expected = TableProto.size_start
        ;

        while (
            size_expected < size_current
        ) {
            size_expected = size_step(size_expected);
        };
        
        return(
            new Table(
                template,
                keys,
                size_expected,
                size_current,
            )
        );
    }
);
