export var Material = (function () {
    function Material(obj) {
        this.id = obj && obj.id || null;
        this.naam = obj && obj.naam || null;
        this.eenheidsmaat = obj && obj.eenheidsmaat || null;
        this.eenheidsprijs = obj && obj.eenheidsprijs || null;
        this.soort = obj && obj.soort || null;
        this.hoeveelheid = obj && obj.hoeveelheid || null;
        this.opdrachtId = obj && obj.opdrachtId || null;
    }
    return Material;
}());
//# sourceMappingURL=/Users/kbo/dev_java/git/angular/src/app/model/material.model.js.map