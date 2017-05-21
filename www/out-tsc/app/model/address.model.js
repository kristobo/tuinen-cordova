export var Address = (function () {
    function Address(obj) {
        this.id = obj && obj.id || null;
        this.straat = obj && obj.straat || null;
        this.nummer = obj && obj.nummer || null;
        this.bus = obj && obj.bus || null;
        this.postcode = obj && obj.postcode || null;
        this.plaats = obj && obj.plaats || null;
    }
    return Address;
}());
//# sourceMappingURL=/Users/kbo/dev_java/git/angular/src/app/model/address.model.js.map