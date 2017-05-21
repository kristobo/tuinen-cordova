export var Job = (function () {
    function Job(obj) {
        this.id = obj && obj.id || null;
        this.klantId = obj && obj.klantId || null;
        this.klantAdresId = obj && obj.klantAdresId || null;
        this.longitude = obj && obj.longitude || null;
        this.latitude = obj && obj.latitude || null;
        this.task = obj && obj.task || null;
        this.customer = obj && obj.customer || null;
    }
    return Job;
}());
//# sourceMappingURL=/Users/kbo/dev_java/git/angular/src/app/model/job.model.js.map