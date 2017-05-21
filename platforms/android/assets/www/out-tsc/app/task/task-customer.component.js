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
import { DataService } from '../services/data.service';
export var TaskCustomerComponent = (function () {
    function TaskCustomerComponent(dataService) {
        this.dataService = dataService;
    }
    TaskCustomerComponent.prototype.ngOnInit = function () {
        this.getCustomerInfo(this.id);
    };
    // Get customer info by customerId.
    TaskCustomerComponent.prototype.getCustomerInfo = function (id) {
        var _this = this;
        this.dataService.getCustomer(id)
            .subscribe(function (customer) {
            _this.customer = customer;
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], TaskCustomerComponent.prototype, "id", void 0);
    TaskCustomerComponent = __decorate([
        Component({
            selector: 'app-task-customer',
            templateUrl: 'task-customer.component.html',
        }), 
        __metadata('design:paramtypes', [DataService])
    ], TaskCustomerComponent);
    return TaskCustomerComponent;
}());
//# sourceMappingURL=/Users/kbo/dev_java/git/angular/src/app/task/task-customer.component.js.map