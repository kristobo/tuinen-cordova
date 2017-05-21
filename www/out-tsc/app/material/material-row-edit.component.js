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
import { Material } from "../model/material.model";
export var MaterialRowEditComponent = (function () {
    function MaterialRowEditComponent() {
    }
    MaterialRowEditComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(), 
        __metadata('design:type', Material)
    ], MaterialRowEditComponent.prototype, "material", void 0);
    MaterialRowEditComponent = __decorate([
        Component({
            selector: 'app-material-row-edit',
            templateUrl: './material-row-edit.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], MaterialRowEditComponent);
    return MaterialRowEditComponent;
}());
//# sourceMappingURL=/Users/kbo/dev_java/git/angular/src/app/material/material-row-edit.component.js.map