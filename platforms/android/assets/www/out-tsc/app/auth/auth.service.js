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
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';
export var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.authenticate = function (formData) {
        // Set correct headers.
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // Use default form format to send.
        var params = new URLSearchParams();
        params.append('username', formData.username);
        params.append('password', formData.password);
        var data = params.toString();
        // Post!
        return this.http.post('/login', data, { headers: headers })
            .map(function (response) {
            sessionStorage.setItem('token', response.text());
        });
    };
    AuthService.prototype.logout = function () {
        sessionStorage.removeItem('token');
    };
    AuthService.prototype.isLoggedIn = function () {
        var token = sessionStorage.getItem('token');
        if (token) {
            return true;
        }
        return false;
    };
    AuthService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], AuthService);
    return AuthService;
}());
//# sourceMappingURL=/Users/kbo/dev_java/git/angular/src/app/auth/auth.service.js.map