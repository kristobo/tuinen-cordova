import { async, TestBed } from '@angular/core/testing';
import { TaskCustomerComponent } from './task-customer.component';
describe('TaskCustomerComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TaskCustomerComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TaskCustomerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/kbo/dev_java/git/angular/src/app/task/task-customer.component.spec.js.map