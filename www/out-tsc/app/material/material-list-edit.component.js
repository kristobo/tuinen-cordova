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
import { JobService } from "../services/job.service";
export var MaterialListEditComponent = (function () {
    function MaterialListEditComponent(jobService, dataService) {
        this.jobService = jobService;
        this.dataService = dataService;
        this.loading = false;
    }
    MaterialListEditComponent.prototype.ngOnInit = function () {
        var job = this.jobService.getCurrent();
        var jobId = job.id;
        this.getAllMaterialsByJob(jobId);
    };
    // Get all tasks for logged in user.
    MaterialListEditComponent.prototype.getAllMaterialsByJob = function (id) {
        var _this = this;
        this.loading = true;
        this.dataService.getAllMaterialsForJob(id)
            .subscribe(function (materials) {
            _this.loading = false;
            _this.materialList = _this.sortedMaterials(materials);
        }, function (error) {
            _this.loading = false;
            console.log(error);
        });
    };
    MaterialListEditComponent.prototype.sortedMaterials = function (materials) {
        return materials.sort(function (a, b) {
            if (a.naam < b.naam)
                return -1;
            else if (a.naam > b.naam)
                return 1;
            else
                return 0;
        });
    };
    MaterialListEditComponent = __decorate([
        Component({
            selector: 'app-material-list-edit',
            templateUrl: './material-list-edit.component.html',
            providers: [JobService],
        }), 
        __metadata('design:paramtypes', [JobService, DataService])
    ], MaterialListEditComponent);
    return MaterialListEditComponent;
}());
//# sourceMappingURL=/Users/kbo/dev_java/git/angular/src/app/material/material-list-edit.component.js.map