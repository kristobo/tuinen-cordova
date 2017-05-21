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
import { Router } from '@angular/router';
export var HeaderComponent = (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        // Init materializecss side nav
        jQuery('.button-collapse').sideNav();
        jQuery('.side-nav li a').on('click', function () {
            jQuery('.button-collapse').not('.active').sideNav('hide');
        });
    };
    HeaderComponent.prototype.goToHome = function () {
        this.router.navigate(["/tasks"]);
    };
    HeaderComponent = __decorate([
        //Make Jquery enable as variable
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html'
        }), 
        __metadata('design:paramtypes', [Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=/Users/kbo/dev_java/git/angular/src/app/header/header.component.js.map