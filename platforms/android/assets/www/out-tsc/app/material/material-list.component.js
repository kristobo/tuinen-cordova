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
import { MaterialService } from '../services/material.service';
export var MaterialListComponent = (function () {
    function MaterialListComponent(dataService, materialService) {
        this.dataService = dataService;
        this.materialService = materialService;
    }
    MaterialListComponent.prototype.ngOnInit = function () {
        this.getAllMaterials();
    };
    // Get all tasks for logged in user.
    MaterialListComponent.prototype.getAllMaterials = function () {
        var _this = this;
        this.loading = true;
        this.dataService.getAllMaterials()
            .subscribe(function (materials) {
            _this.loading = false;
            _this.materialList = _this.sortedMaterials(materials);
            _this.materialService.saveList(materials);
        }, function (error) {
            _this.error = error;
            _this.loading = false;
            console.log(error);
        });
    };
    MaterialListComponent.prototype.sortedMaterials = function (materials) {
        return materials.sort(function (a, b) {
            if (a.naam < b.naam)
                return -1;
            else if (a.naam > b.naam)
                return 1;
            else
                return 0;
        });
    };
    MaterialListComponent = __decorate([
        Component({
            selector: 'app-material-list',
            templateUrl: './material-list.component.html',
            providers: [MaterialService],
        }), 
        __metadata('design:paramtypes', [DataService, MaterialService])
    ], MaterialListComponent);
    return MaterialListComponent;
}());
//# sourceMappingURL=/Users/kbo/dev_java/git/angular/src/app/material/material-list.component.js.map