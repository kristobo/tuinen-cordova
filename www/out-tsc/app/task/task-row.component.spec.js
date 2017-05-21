import { async, TestBed } from '@angular/core/testing';
import { TaskRowComponent } from './task-row.component';
describe('TaskRowComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TaskRowComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TaskRowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/kbo/dev_java/git/angular/src/app/task/task-row.component.spec.js.map