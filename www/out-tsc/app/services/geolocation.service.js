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
import { Observable } from "rxjs";
var GEOLOCATION_ERRORS = {
    'errors.location.unsupportedBrowser': 'Browser ondersteund geen geolocation',
    'errors.location.permissionDenied': 'Geen toegang tot geolocatie',
    'errors.location.positionUnavailable': 'Verkeerde geolocatie data',
    'errors.location.timeout': 'Timeout',
};
export var GeolocationService = (function () {
    function GeolocationService() {
    }
    GeolocationService.prototype.initLocation = function () {
        if (window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position);
            }, function (error) {
                console.log(error);
            });
        }
    };
    // Get geolocation from device and calculate distance.
    GeolocationService.prototype.getRangeOfCoordinates = function (lat, long) {
        var _this = this;
        return Observable.create(function (observer) {
            if (window.navigator && window.navigator.geolocation) {
                window.navigator.geolocation.getCurrentPosition(function (position) {
                    var distance = _this.getDistanceFromLatLonInKm(position.coords.latitude, position.coords.longitude, lat, long).toFixed(3);
                    observer.next(distance);
                    observer.complete();
                }, function (error) {
                    switch (error.code) {
                        case 1:
                            observer.error(GEOLOCATION_ERRORS['errors.location.permissionDenied']);
                            break;
                        case 2:
                            observer.error(GEOLOCATION_ERRORS['errors.location.positionUnavailable']);
                            break;
                        case 3:
                            observer.error(GEOLOCATION_ERRORS['errors.location.timeout']);
                            break;
                    }
                });
            }
            else {
                observer.error(GEOLOCATION_ERRORS['errors.location.unsupportedBrowser']);
            }
        });
    };
    // Calculate distance from 2 points
    GeolocationService.prototype.getDistanceFromLatLonInKm = function (lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    };
    // Helper function to convert deg to rad.
    GeolocationService.prototype.deg2rad = function (deg) {
        return deg * (Math.PI / 180);
    };
    GeolocationService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], GeolocationService);
    return GeolocationService;
}());
//# sourceMappingURL=/Users/kbo/dev_java/git/angular/src/app/services/geolocation.service.js.map