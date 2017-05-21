var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Task } from "../model/task.model";
import { TrackingService } from "../services/tracking.service";
export var TaskRowComponent = (function () {
    function TaskRowComponent(trackingService) {
        this.trackingService = trackingService;
    }
    TaskRowComponent.prototype.ngOnInit = function () {
    };
    // Set running state.
    TaskRowComponent.prototype.isActive = function () {
        return this.trackingService.isTaskActive(this.task.id);
    };
    __decorate([
        Input(), 
        __metadata('design:type', Task)
    ], TaskRowComponent.prototype, "task", void 0);
    TaskRowComponent = __decorate([
        Component({
            selector: 'app-task',
            templateUrl: 'task-row.component.html',
        }), 
        __metadata('design:paramtypes', [TrackingService])
    ], TaskRowComponent);
    return TaskRowComponent;
}());
//# sourceMappingURL=/Users/kbo/dev_java/git/angular/src/app/task/task-row.component.js.map