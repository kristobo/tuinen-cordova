export var Customer = (function () {
    function Customer(obj) {
        this.id = obj && obj.id || null;
        this.bedrijfnaam = obj && obj.bedrijfnaam || null;
        this.btwNummer = obj && obj.btwNummer || null;
        this.naam = obj && obj.naam || null;
        this.voornaam = obj && obj.voornaam || null;
        this.address = obj && obj.address || null;
    }
    return Customer;
}());
//# sourceMappingURL=/Users/kbo/dev_java/git/angular/src/app/model/customer.model.js.map