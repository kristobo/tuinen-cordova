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
import { Job } from '../model/job.model';
import { MaterialService } from '../services/material.service';
import { JobService } from '../services/job.service';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
export var MaterialAddComponent = (function () {
    function MaterialAddComponent(activatedRoute, materialService, jobService, dataService, router) {
        this.activatedRoute = activatedRoute;
        this.materialService = materialService;
        this.jobService = jobService;
        this.dataService = dataService;
        this.router = router;
        this.loading = false;
        this.step = 0.5;
    }
    MaterialAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            var materialId = params['id'];
            _this.material = _this.materialService.getMaterialById(materialId);
            if (_this.material.eenheidsmaat == "stuk") {
                _this.step = 1;
            }
        });
    };
    // Increase value.
    MaterialAddComponent.prototype.add = function () {
        this.material.hoeveelheid = this.material.hoeveelheid + this.step;
    };
    // Decrease value.
    MaterialAddComponent.prototype.remove = function () {
        if (this.material.hoeveelheid >= this.step) {
            this.material.hoeveelheid = this.material.hoeveelheid - this.step;
        }
    };
    // Add material to job and go back.
    MaterialAddComponent.prototype.updateJobMaterial = function () {
        var _this = this;
        this.loading = true;
        var job = new Job(this.jobService.getCurrent());
        this.material.opdrachtId = job.id;
        this.dataService.addJobMaterial(this.material).subscribe(function (data) {
            _this.loading = false;
            _this.router.navigate(["/task", job.task.id]);
            console.log(data);
        }, function (error) {
            _this.loading = false;
            console.log(error);
        });
    };
    MaterialAddComponent = __decorate([
        Component({
            selector: 'app-material-add',
            templateUrl: './material-add.component.html',
            providers: [MaterialService, JobService],
        }), 
        __metadata('design:paramtypes', [ActivatedRoute, MaterialService, JobService, DataService, Router])
    ], MaterialAddComponent);
    return MaterialAddComponent;
}());
//# sourceMappingURL=/Users/kbo/dev_java/git/angular/src/app/material/material-add.component.js.map