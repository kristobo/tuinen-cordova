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
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from "../auth/auth.service";
import { GeolocationService } from "../services/geolocation.service";
export var LoginComponent = (function () {
    function LoginComponent(fb, authService, router, geo) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.geo = geo;
        this.loginForm = fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    // Handle login credentials.
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.loading = true;
        this.error = "";
        this.authService.authenticate(form.value).subscribe(function (data) {
            _this.router.navigate(["/tasks"]);
        }, function (error) {
            console.log(error);
            _this.error = "Connection error";
            if (error._body && typeof error._body === "string") {
                _this.error = error._body;
            }
            _this.loading = false;
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.authService.logout();
        this.geo.initLocation();
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: 'login.component.html',
            providers: [GeolocationService],
        }), 
        __metadata('design:paramtypes', [FormBuilder, AuthService, Router, GeolocationService])
    ], LoginComponent);
    return LoginComponent;
}());
//# sourceMappingURL=/Users/kbo/dev_java/git/angular/src/app/login/login.component.js.map