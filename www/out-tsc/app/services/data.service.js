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
import { Http } from '@angular/http';
import { Observable } from "rxjs";
export var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    // Get all tasks.
    DataService.prototype.getAllTasks = function () {
        return this.http.get('/task/all')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // Get all materials.
    DataService.prototype.getAllMaterials = function () {
        return this.http.get('/material/all')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // Get all materials.
    DataService.prototype.getAllMaterialsForJob = function (id) {
        return this.http.get('/material/job/' + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // Get customer info by id.
    DataService.prototype.getCustomer = function (id) {
        return this.http.get('/customer/' + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // Get address info by id.
    DataService.prototype.getAddress = function (id) {
        return this.http.get('/address/' + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // get job info from taskId.
    DataService.prototype.getJobByTaskId = function (id) {
        var _this = this;
        return this.http.get('/task/' + id)
            .map(function (res) { return res.json(); })
            .flatMap(function (task) {
            //Get Job data
            return _this.http.get('/job/' + task.opdrachtId)
                .map(function (res) {
                var job = res.json();
                job.task = task;
                return job;
            });
        })
            .catch(this.handleError);
    };
    // Update task progress.
    DataService.prototype.updateProgress = function (job) {
        return this.http.post('/task/progress', job)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // Update task status.
    DataService.prototype.updateStatus = function (job) {
        return this.http.post('/status/update', job)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // Update tracking info.
    DataService.prototype.trackTaskTime = function (track) {
        return this.http.post('/task/track', track)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // Update tracking info.
    DataService.prototype.addJobMaterial = function (material) {
        return this.http.post('/material/job/add', material)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // Function to reports error's.
    DataService.prototype.handleError = function (error) {
        if (error['_body'] && typeof error['_body'] === "string") {
            return Observable.throw(console.log(error) || error['_body']);
        }
        return Observable.throw(console.log("Connection error"));
    };
    DataService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], DataService);
    return DataService;
}());
//# sourceMappingURL=/Users/kbo/dev_java/git/angular/src/app/services/data.service.js.map