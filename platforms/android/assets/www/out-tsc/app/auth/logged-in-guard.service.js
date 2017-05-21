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
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
export var LoggedInGuard = (function () {
    function LoggedInGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Prevent showing pages to not logged in users.
    LoggedInGuard.prototype.canActivate = function () {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    LoggedInGuard = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [AuthService, Router])
    ], LoggedInGuard);
    return LoggedInGuard;
}());
//# sourceMappingURL=/Users/kbo/dev_java/git/angular/src/app/auth/logged-in-guard.service.js.map