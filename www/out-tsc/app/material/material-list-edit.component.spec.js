import { async, TestBed } from '@angular/core/testing';
import { MaterialListEditComponent } from './material-list-edit.component';
describe('MaterialListEditComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MaterialListEditComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MaterialListEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/kbo/dev_java/git/angular/src/app/material/material-list-edit.component.spec.js.map