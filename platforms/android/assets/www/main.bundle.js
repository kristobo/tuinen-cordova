webpackJsonp([2,5],{

/***/ 1019:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(442);


/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.authenticate = function (formData) {
        // Set correct headers
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // Use default form format to send
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/eindwerk/src/auth.service.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__(245);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedInGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoggedInGuard = (function () {
    function LoggedInGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoggedInGuard.prototype.canActivate = function () {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    LoggedInGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], LoggedInGuard);
    return LoggedInGuard;
    var _a, _b;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/eindwerk/src/logged-in-guard.service.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__(245);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.loginForm = fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]
        });
    }
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.loading = true;
        this.message = "";
        this.authService.authenticate(form.value).subscribe(function (data) {
            _this.router.navigate(["/tasks"]);
        }, function (error) {
            _this.message = "Verkeerde gebruikersnaam of paswoord.";
            _this.loading = false;
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(729),
            providers: [__WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/eindwerk/src/login.component.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaskDetailComponent = (function () {
    function TaskDetailComponent() {
    }
    TaskDetailComponent.prototype.ngOnInit = function () {
    };
    TaskDetailComponent.prototype.ngAfterViewInit = function () {
        // Init materializecss dropdown menu
        jQuery('.quick-list-btn').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrainWidth: false,
            hover: true,
            gutter: 0,
            belowOrigin: false,
            alignment: 'right',
            stopPropagation: false // Stops event propagation
        });
    };
    TaskDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-task-detail',
            template: __webpack_require__(730),
        }), 
        __metadata('design:paramtypes', [])
    ], TaskDetailComponent);
    return TaskDetailComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/eindwerk/src/task-detail.component.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_model__ = __webpack_require__(368);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskListComponent = (function () {
    function TaskListComponent() {
        var task1 = {
            'id': 3,
            'title': 'Taak 1',
            'category': 'cat2'
        };
        var task2 = {
            'id': 2,
            'title': 'Taak 2',
            'category': 'cat2'
        };
        var task3 = {
            'id': 1,
            'title': 'Taak 3',
            'category': 'cat2'
        };
        this.tasks = [
            new __WEBPACK_IMPORTED_MODULE_1__task_model__["a" /* Task */](task1),
            new __WEBPACK_IMPORTED_MODULE_1__task_model__["a" /* Task */](task2),
            new __WEBPACK_IMPORTED_MODULE_1__task_model__["a" /* Task */](task3),
        ];
    }
    TaskListComponent.prototype.ngOnInit = function () {
    };
    TaskListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-tasklist',
            template: __webpack_require__(731),
        }), 
        __metadata('design:paramtypes', [])
    ], TaskListComponent);
    return TaskListComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/eindwerk/src/task-list.component.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var Task = (function () {
    function Task(obj) {
        this.id = obj && obj.id || null;
        this.title = obj && obj.title || null;
        this.category = obj && obj.category || null;
    }
    return Task;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/eindwerk/src/task.model.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    origin: 'http://localhost:61251/tuinbouw/rest'
};
//# sourceMappingURL=/Applications/MAMP/htdocs/eindwerk/src/environment.js.map

/***/ }),

/***/ 441:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 441;


/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(563);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Applications/MAMP/htdocs/eindwerk/src/main.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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

var AppComponent = (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        _super.apply(this, arguments);
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: "\n    <app-header></app-header>\n    <router-outlet></router-outlet>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* OnInit */]));
//# sourceMappingURL=/Applications/MAMP/htdocs/eindwerk/src/app.component.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__task_task_list_component__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__task_task_row_component__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__task_task_detail_component__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_header_component__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_auth_service__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_logged_in_guard_service__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__http_http_factory__ = __webpack_require__(566);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__task_task_list_component__["a" /* TaskListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__task_task_row_component__["a" /* TaskRowComponent */],
                __WEBPACK_IMPORTED_MODULE_10__task_task_detail_component__["a" /* TaskDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_11__header_header_component__["a" /* HeaderComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* routing */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_13__guards_logged_in_guard_service__["a" /* LoggedInGuard */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
                    useFactory: __WEBPACK_IMPORTED_MODULE_14__http_http_factory__["a" /* httpFactory */],
                    deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]]
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/eindwerk/src/app.module.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_task_list_component__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_task_detail_component__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_logged_in_guard_service__ = __webpack_require__(364);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });





var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'tasks', component: __WEBPACK_IMPORTED_MODULE_2__task_task_list_component__["a" /* TaskListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_logged_in_guard_service__["a" /* LoggedInGuard */]] },
    { path: 'task/:id', component: __WEBPACK_IMPORTED_MODULE_3__task_task_detail_component__["a" /* TaskDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_logged_in_guard_service__["a" /* LoggedInGuard */]] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=/Applications/MAMP/htdocs/eindwerk/src/app.routes.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
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
    HeaderComponent = __decorate([
        //Make Jquery enable as variable
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__(728)
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/eindwerk/src/header.component.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_interceptor__ = __webpack_require__(567);
/* harmony export (immutable) */ __webpack_exports__["a"] = httpFactory;

function httpFactory(xhrBackend, requestOptions) {
    return new __WEBPACK_IMPORTED_MODULE_0__http_interceptor__["a" /* InterceptedHttp */](xhrBackend, requestOptions);
}
//# sourceMappingURL=/Applications/MAMP/htdocs/eindwerk/src/http.factory.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(369);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptedHttp; });
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



var InterceptedHttp = (function (_super) {
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
        return __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].origin + req;
    };
    InterceptedHttp.prototype.getRequestOptionArgs = function (path, options) {
        if (options == null) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        }
        if (options.headers == null) {
            options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]();
        }
        var token = sessionStorage.getItem('token');
        if (token && path != "/login") {
            options.headers.append('Authorization', token);
            options.headers.append('Content-Type', 'application/json');
        }
        return options;
    };
    InterceptedHttp = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ConnectionBackend */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ConnectionBackend */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]) === 'function' && _b) || Object])
    ], InterceptedHttp);
    return InterceptedHttp;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]));
//# sourceMappingURL=/Applications/MAMP/htdocs/eindwerk/src/http.interceptor.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_model__ = __webpack_require__(368);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskRowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskRowComponent = (function () {
    function TaskRowComponent() {
    }
    TaskRowComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__task_model__["a" /* Task */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__task_model__["a" /* Task */]) === 'function' && _a) || Object)
    ], TaskRowComponent.prototype, "task", void 0);
    TaskRowComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-task',
            template: __webpack_require__(732)
        }), 
        __metadata('design:paramtypes', [])
    ], TaskRowComponent);
    return TaskRowComponent;
    var _a;
}());
//# sourceMappingURL=/Applications/MAMP/htdocs/eindwerk/src/task-row.component.js.map

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"nav-wrapper\">\n\n    <div class=\"logo\">\n      <img src=\"assets/logo.png\" alt=\"Logo\">\n    </div>\n\n    <ul class=\"left side-nav\" id=\"slide-out\">\n      <li><a [routerLink]=\"['/login']\" [routerLinkActive]=\"['active']\">Login</a></li>\n      <li><a [routerLink]=\"['/tasks']\" [routerLinkActive]=\"['active']\">Tasks</a></li>\n      <li><a [routerLink]=\"['/task', 4]\" [routerLinkActive]=\"['active']\">Task Detail</a></li>\n    </ul>\n\n    <a href=\"#\" class=\"button-collapse\" data-activates=\"slide-out\">\n      <i class=\"material-icons\">menu</i>\n    </a>\n  </div>\n</nav>"

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

module.exports = "<section class=\"login-form row\">\n    <div class=\"container\">\n        <div class=\"col s12 m6 offset-m3\">\n            <img src=\"assets/logo.png\" alt=\"Logo\" class=\"logo\" >\n            <h1 *ngIf=\"!loading\">Login</h1>\n\n            <div *ngIf=\"loading\" class=\"spinner\">\n                <div class=\"d1\"></div>\n                <div class=\"d2\"></div>\n            </div>\n\n            <div *ngIf=\"message\" class=\"error\">{{message}}</div>\n\n            <form *ngIf=\"!loading\" [formGroup]=\"loginForm\"\n                  (ngSubmit)=\"onSubmit(loginForm)\">\n\n                <div class=\"textfield-wrapper\"\n                     [class.has-error]=\"!loginForm.controls['username'].valid\n                            && loginForm.controls['username'].touched\">\n\n                    <label for=\"username\">Geef uw gebruikersnaam in:</label>\n\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-user fa-lg\"></i></span>\n                        <input class=\"textfield-input\" type=\"text\" id=\"username\" placeholder=\"Gebruikersnaam\" formControlName=\"username\">\n                    </div>\n                </div>\n\n                <div class=\"textfield-wrapper\"\n                     [class.has-error]=\"!loginForm.controls['password'].valid\n                            && loginForm.controls['password'].touched\">\n\n                    <label for=\"password\">Geef u paswoord in:</label>\n\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\"></i></span>\n                        <input class=\"textfield-input\" type=\"password\" id=\"password\" placeholder=\"Paswoord\" formControlName=\"password\">\n                    </div>\n\n                </div>\n\n                <button class=\"btn login-button\" [disabled]=\"!loginForm.valid\">\n                    Inloggen\n                </button>\n            </form>\n\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"task-detail row\">\n\n  <div class=\"container\">\n    <div class=\"col s12 m6 offset-m3\">\n      <div class=\"row detail-header\">\n        <div class=\"col s10\">\n          <div class=\"intro\">\n            <div class=\"name\">\n                <span>\n                 Bourgeois Kristof\n                </span>\n            </div>\n            <div class=\"adress\">\n                <span>\n                  Molenstraat 39 <br>\n                  Kortrijk\n                </span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col s2\">\n          <button class=\"btn-flat quick-list-btn\"\n                  data-activates='dropdown-menu'>\n            <i class=\"material-icons\">more_vert</i>\n\n            <ul id='dropdown-menu' class='dropdown-content'>\n              <li><a href=\"#!\">Toon adres op kaart</a></li>\n            </ul>\n\n          </button>\n        </div>\n\n      </div>\n\n\n      <div class=\"row actions\">\n        <button class=\"start-pauze\">Start <i class=\"material-icons\">play_arrow</i></button>\n        <!--<button class=\"\">Pauze<i class=\"material-icons\">pause</i></button>-->\n        <button disabled class=\"stop\">Stop <i class=\"material-icons\">stop</i></button>\n      </div>\n\n\n      <div class=\"row detail-body\">\n        <div class=\"table\">\n          <div class=\"table-header\">\n            Omschrijving\n          </div>\n\n          <div class=\"table-body\">\n            <p class=\"title\">title</p>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n            </p>\n          </div>\n        </div>\n\n      </div>\n\n\n\n\n\n    </div>\n  </div>\n  \n</div>\n\n"

/***/ }),

/***/ 731:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"task-list row\">\n    <div class=\"container\">\n        <div class=\"col s12 m6 offset-m3\">\n            <h2>Overzicht taken</h2>\n\n            <app-task\n                    *ngFor=\"let task of tasks\"\n                    [task]=\"task\">\n            </app-task>\n\n        </div>\n    </div>\n\n</div>\n\n\n"

/***/ }),

/***/ 732:
/***/ (function(module, exports) {

module.exports = "<a class=\"task-item\">\n   <div class=\"icon\">\n      <i class=\"fa fa-arrow-right fa-lg\"></i>\n   </div>\n   <div class=\"content\">\n      <div class=\"title\">{{ task.title }}</div>\n      <div class=\"category\">{{ task.category }}</div>\n   </div>\n</a>\n"

/***/ })

},[1019]);
//# sourceMappingURL=main.bundle.map