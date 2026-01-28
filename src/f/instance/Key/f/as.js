
export default (
    function(Key, name) {
        var k = new Key(name, this.size);
        k.origin = this;
        return k;
    }
);
