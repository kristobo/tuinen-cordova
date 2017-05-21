var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { ConnectionBackend, RequestOptions, Http, Headers } from "@angular/http";
import { environment } from "../../environments/environment";
// Override angular HTTP class to handle different environments and set correct headers
export var InterceptedHttp = (function (_super) {
    __extends(InterceptedHttp, _super);
    function InterceptedHttp(backend, defaultOptions) {
        _super.call(this, backend, defaultOptions);
    }
    InterceptedHttp.prototype.get = function (path, options) {
        var url = this.updateUrl(path);
        return _super.prototype.get.call(this, url, this.getRequestOptionArgs(path, options));
    };
    InterceptedHttp.prototype.post = function (path, body, options) {
        var url = this.updateUrl(path);
        return _super.prototype.post.call(this, url, body, this.getRequestOptionArgs(path, options));
    };
    InterceptedHttp.prototype.put = function (path, body, options) {
        var url = this.updateUrl(path);
        return _super.prototype.put.call(this, url, body, this.getRequestOptionArgs(path, options));
    };
    InterceptedHttp.prototype.delete = function (path, options) {
        var url = this.updateUrl(path);
        return _super.prototype.delete.call(this, url, this.getRequestOptionArgs(path, options));
    };
    InterceptedHttp.prototype.updateUrl = function (req) {
        return environment.origin + req;
    };
    InterceptedHttp.prototype.getRequestOptionArgs = function (path, options) {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        var token = sessionStorage.getItem('token');
        if (token && path != "/login") {
            options.headers.append('Authorization', token);
            options.headers.append('Content-Type', 'application/json');
        }
        return options;
    };
    InterceptedHttp = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [ConnectionBackend, RequestOptions])
    ], InterceptedHttp);
    return InterceptedHttp;
}(Http));
//# sourceMappingURL=/Users/kbo/dev_java/git/angular/src/app/http/http.interceptor.js.map