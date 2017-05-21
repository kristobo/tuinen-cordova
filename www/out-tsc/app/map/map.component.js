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
import { DomSanitizer } from '@angular/platform-browser';
import { JobService } from "../services/job.service";
export var MapComponent = (function () {
    function MapComponent(sanitizer, jobService) {
        this.sanitizer = sanitizer;
        this.jobService = jobService;
        // Get current job info.
        var job = jobService.getCurrent();
        this.mapUrl =
            sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed/v1/place?" +
                "key=AIzaSyC7r-xZGitdgfvMXOfB2aDmrpzGlIt4pH0" +
                "&q=" + job.customer.address.straat + "+" + job.customer.address.nummer + "," +
                "" + job.customer.address.postcode + "+" + job.customer.address.plaats + "");
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = __decorate([
        Component({
            selector: 'app-map',
            templateUrl: 'map.component.html',
            providers: [JobService],
        }), 
        __metadata('design:paramtypes', [DomSanitizer, JobService])
    ], MapComponent);
    return MapComponent;
}());
//# sourceMappingURL=/Users/kbo/dev_java/git/angular/src/app/map/map.component.js.map