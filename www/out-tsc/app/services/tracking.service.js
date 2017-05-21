var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Track } from "../model/track.model";
import { DataService } from "../services/data.service";
import { isUndefined } from "util";
/**
 * This Class holds an track object with the running tracking data.
 */
export var TrackingService = (function () {
    function TrackingService(dataService) {
        this.dataService = dataService;
    }
    // Start tracking
    TrackingService.prototype.start = function (opdrachtId, taskId, startTime) {
        this.track = new Track(opdrachtId, taskId, startTime, null);
        localStorage.setItem(taskId.toString(), "started-once");
        console.log("track-start", this.track);
    };
    // Stop tracking
    TrackingService.prototype.stop = function (endTime) {
        var _this = this;
        this.track.endTime = endTime;
        this.dataService.trackTaskTime(this.track).subscribe(function (data) {
            console.log(data);
            _this.track = null;
            return true;
        }, function (error) {
            console.log(error);
        });
        console.log("track-stop", this.track);
    };
    // Check if task is active
    TrackingService.prototype.isTaskActive = function (taskId) {
        var active = false;
        if (!isUndefined(this.track) && this.track != null) {
            if (this.track.taskId == taskId) {
                active = true;
            }
        }
        return active;
    };
    // Check if any task is runni
    TrackingService.prototype.isTrackRunning = function () {
        var running = false;
        if (!isUndefined(this.track) && this.track != null) {
            running = true;
        }
        return running;
    };
    TrackingService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [DataService])
    ], TrackingService);
    return TrackingService;
}());
//# sourceMappingURL=/Users/kbo/dev_java/git/angular/src/app/services/tracking.service.js.map