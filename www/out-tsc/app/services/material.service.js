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
export var MaterialService = (function () {
    function MaterialService() {
    }
    // Save job
    MaterialService.prototype.saveList = function (materialList) {
        sessionStorage.setItem('materialList', JSON.stringify(materialList));
    };
    MaterialService.prototype.getMaterialById = function (mid) {
        var materialList = JSON.parse(sessionStorage.getItem('materialList'));
        var material = materialList.find(function (x) { return x.id == mid; });
        return material;
    };
    MaterialService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], MaterialService);
    return MaterialService;
}());
//# sourceMappingURL=/Users/kbo/dev_java/git/angular/src/app/services/material.service.js.map