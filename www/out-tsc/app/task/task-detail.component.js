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
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { TrackingService } from "../services/tracking.service";
import { TaskStatus } from "./enum.status";
import { JobService } from "../services/job.service";
import { GeolocationService } from "../services/geolocation.service";
export var TaskDetailComponent = (function () {
    function TaskDetailComponent(activatedRoute, dataService, trackingService, jobService, geo) {
        this.activatedRoute = activatedRoute;
        this.dataService = dataService;
        this.trackingService = trackingService;
        this.jobService = jobService;
        this.geo = geo;
        this.paused = true;
        this.showActions = true;
    }
    TaskDetailComponent.prototype.ngOnInit = function () {
        this.getJobInfo();
    };
    TaskDetailComponent.prototype.ngAfterViewInit = function () {
        this.initMaterializeJs();
    };
    // Get current job info and store in sessionStorage.
    TaskDetailComponent.prototype.getJobInfo = function () {
        var _this = this;
        this.loading = true;
        this.activatedRoute.params.subscribe(function (params) {
            var taskId = params['id'];
            _this.dataService.getJobByTaskId(taskId).subscribe(function (job) {
                _this.loading = false;
                _this.job = job;
                _this.jobService.save(job);
                // Get rest of the info.
                _this.getCustomerInfo(_this.job.klantId);
                // Init actions buttons.
                _this.initActions();
            }, function (error) {
                console.log(error);
            });
        });
    };
    // Init correct layout.
    TaskDetailComponent.prototype.initActions = function () {
        if (this.trackingService.isTrackRunning()) {
            if (this.trackingService.isTaskActive(this.job.task.id)) {
                // If track is running on this job, set correct buttons state.
                this.paused = false;
            }
            else {
                // If track is running on an other job, then show a message.
                this.showActions = false;
                this.message = "Een andere taak is actief";
            }
        }
    };
    // Get Customer info for currect job.
    TaskDetailComponent.prototype.getCustomerInfo = function (id) {
        var _this = this;
        this.dataService.getCustomer(id)
            .subscribe(function (customer) {
            _this.job.customer = customer;
            _this.getAddressInfo(_this.job.klantAdresId);
        }, function (error) {
            console.log(error);
        });
    };
    // Get Address info for current job.
    TaskDetailComponent.prototype.getAddressInfo = function (id) {
        var _this = this;
        this.dataService.getAddress(id)
            .subscribe(function (address) {
            _this.job.customer.address = address;
            _this.jobService.save(_this.job);
        }, function (error) {
            console.log(error);
        });
    };
    TaskDetailComponent.prototype.ActionButtun = function (status) {
        var _this = this;
        // Prevent recording when task is finished.
        // /1000 because getTime is in milliseconds.
        var time = new Date().getTime() / 1000;
        if (this.job.task.vooruitgangPercentage != 100) {
            // ButtenHandler.
            if (status == "play") {
                this.loading = true;
                // Check if you are in the correct zone to record a job.
                this.geo.getRangeOfCoordinates(this.job.latitude, this.job.longitude).subscribe(function (distance) {
                    // if distance is smaller than 200m start tracking
                    if (distance < 0.2) {
                        _this.paused = false;
                        var status_1 = TaskStatus.Gestart;
                        if (_this.startedOne()) {
                            status_1 = TaskStatus.Hervat;
                        }
                        _this.updateStatus(status_1);
                        _this.trackingService.start(_this.job.id, _this.job.task.id, time);
                    }
                    else {
                        _this.loading = false;
                        _this.message = "U bevindt zich niet binnen 200m van het adres (" + distance + ")";
                    }
                }, function (error) {
                    _this.message = error;
                });
            }
            else if (status == "stop") {
                this.updateProgress(100);
            }
            else if (status == "pauze") {
                this.paused = true;
                this.updateStatus(TaskStatus.Gepauzeerd);
                this.trackingService.stop(time);
            }
        }
    };
    // Update task progress.
    TaskDetailComponent.prototype.updateProgress = function (value) {
        var _this = this;
        this.loading = true;
        if (value == 100) {
            this.paused = true;
            this.updateStatus(TaskStatus.Afgewerkt);
            if (this.trackingService.isTrackRunning() &&
                this.trackingService.isTaskActive(this.job.task.id)) {
                var time = new Date().getTime() / 1000;
                this.trackingService.stop(time);
            }
        }
        this.job.task.vooruitgangPercentage = value;
        this.dataService.updateProgress(this.job).subscribe(function (data) {
            _this.loading = false;
            console.log(data);
        }, function (error) {
            _this.loading = true;
            console.log(error);
        });
    };
    // Set correct task status.
    TaskDetailComponent.prototype.updateStatus = function (statusId) {
        var _this = this;
        this.loading = true;
        this.job.task.statusId = statusId;
        this.dataService.updateStatus(this.job).subscribe(function (data) {
            _this.loading = false;
            console.log(data);
        }, function (error) {
            _this.loading = false;
            console.log(error);
        });
    };
    // Not used because original value gets overwritten.
    TaskDetailComponent.prototype.setCoordinates = function () {
        var onSuccess = function (position) {
            alert('Latitude: ' + position.coords.latitude + '\n' +
                'Longitude: ' + position.coords.longitude + '\n' +
                'Altitude: ' + position.coords.altitude + '\n' +
                'Accuracy: ' + position.coords.accuracy + '\n' +
                'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
                'Heading: ' + position.coords.heading + '\n' +
                'Speed: ' + position.coords.speed + '\n' +
                'Timestamp: ' + position.timestamp + '\n');
            this.currentLong = position.coords.longitude;
            this.currentLat = position.coords.latitude;
        };
        // onError Callback receives a PositionError object
        //
        function onError(error) {
            alert('code: ' + error.code + '\n' +
                'message: ' + error.message + '\n');
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    };
    // Check if started one to set correct status.
    TaskDetailComponent.prototype.startedOne = function () {
        var started = localStorage.getItem(this.job.task.id.toString());
        if (started) {
            return true;
        }
        return false;
    };
    TaskDetailComponent.prototype.getStatus = function (id) {
        return TaskStatus[id];
    };
    TaskDetailComponent.prototype.initMaterializeJs = function () {
        // Init materializecss dropdown menu.
        jQuery('.quick-list-btn').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrainWidth: false,
            hover: true,
            gutter: 0,
            belowOrigin: false,
            alignment: 'right',
            stopPropagation: false // Stops event propagation
        });
    };
    TaskDetailComponent = __decorate([
        Component({
            selector: 'app-task-detail',
            templateUrl: './task-detail.component.html',
            providers: [JobService, GeolocationService],
        }), 
        __metadata('design:paramtypes', [ActivatedRoute, DataService, TrackingService, JobService, GeolocationService])
    ], TaskDetailComponent);
    return TaskDetailComponent;
}());
//# sourceMappingURL=/Users/kbo/dev_java/git/angular/src/app/task/task-detail.component.js.map