
export default (
    function(Key) {
        var k = new Key(this.name, this.size);
        k.origin = this;
        return k;
    }
);
