
export default (
    (
      fd,
      
      cursor,response,
      
      block_size,entry_length,
      
      block_id,limit,
      
      from,to,
      
      read,check,iter,cond,r,cb,
    ) => {
      var
        found = 0,

        read_cb = (
          (_,block_size) => {
            a: {
              for (
                var
                  i = 0
                ;
                i<block_size;
                i+=entry_length
              ) {
                if (
                  cond(r, cursor,response, i,entry_length, found,limit, block_id)
                  &&
                  ((++found) === limit)
                ) {
                  cb(r,limit,response);
                  break a;
                }
              };

              check(from,to)
              ? (
                (block_id++),
                read(fd,cursor,0,block_size,(from=iter(from,block_size)),read_cb)
              )
              : cb(r,found,response);
            }
            return undefined;
          }
        )
      ;
      return (
        read(fd,cursor,0,block_size,from,read_cb),
        undefined
      );
    }
);
