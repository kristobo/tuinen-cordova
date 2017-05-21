export var Track = (function () {
    function Track(opdrachtId, taskId, startTime, endTime) {
        this.startTime = startTime || null;
        this.endTime = endTime || null;
        this.opdrachtId = opdrachtId || null;
        this.taskId = taskId || null;
    }
    return Track;
}());
//# sourceMappingURL=/Users/kbo/dev_java/git/angular/src/app/model/track.model.js.map