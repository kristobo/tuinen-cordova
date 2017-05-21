var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
export var TaskListComponent = (function () {
    function TaskListComponent(dataService) {
        this.dataService = dataService;
    }
    TaskListComponent.prototype.ngOnInit = function () {
        this.getAllTasks();
    };
    // Get all tasks for logged in user.
    TaskListComponent.prototype.getAllTasks = function () {
        var _this = this;
        this.loading = true;
        this.dataService.getAllTasks()
            .subscribe(function (tasks) {
            _this.loading = false;
            _this.tasks = tasks;
        }, function (error) {
            _this.error = error;
            _this.loading = false;
        });
    };
    TaskListComponent = __decorate([
        Component({
            selector: 'app-tasklist',
            templateUrl: 'task-list.component.html',
        }), 
        __metadata('design:paramtypes', [DataService])
    ], TaskListComponent);
    return TaskListComponent;
}());
//# sourceMappingURL=/Users/kbo/dev_java/git/angular/src/app/task/task-list.component.js.map