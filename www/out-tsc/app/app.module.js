var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TaskListComponent } from './task//task-list.component';
import { TaskRowComponent } from './task/task-row.component';
import { TaskDetailComponent } from './task/task-detail.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './auth/auth.service';
import { LoggedInGuard } from "./auth/logged-in-guard.service";
import { httpFactory } from "./http/http.factory";
import { MapComponent } from './map/map.component';
import { TaskCustomerComponent } from './task/task-customer.component';
import { TrackingService } from "./services/tracking.service";
import { DataService } from "./services/data.service";
import { MaterialListComponent } from './material/material-list.component';
import { MaterialRowComponent } from './material/material-row.component';
import { MaterialAddComponent } from './material/material-add.component';
import { MaterialListEditComponent } from './material/material-list-edit.component';
import { MaterialRowEditComponent } from './material/material-row-edit.component';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                LoginComponent,
                TaskListComponent,
                TaskRowComponent,
                TaskDetailComponent,
                HeaderComponent,
                MapComponent,
                TaskCustomerComponent,
                MaterialListComponent,
                MaterialRowComponent,
                MaterialAddComponent,
                MaterialListEditComponent,
                MaterialRowEditComponent,
            ],
            imports: [
                BrowserModule,
                FormsModule,
                ReactiveFormsModule,
                HttpModule,
                RouterModule,
                routing,
            ],
            providers: [
                AuthService,
                LoggedInGuard,
                TrackingService,
                DataService,
                {
                    provide: Http,
                    useFactory: httpFactory,
                    deps: [XHRBackend, RequestOptions]
                }
            ],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/kbo/dev_java/git/angular/src/app/app.module.js.map