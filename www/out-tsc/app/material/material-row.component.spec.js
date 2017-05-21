import { async, TestBed } from '@angular/core/testing';
import { MaterialRowComponent } from './material-row.component';
describe('MaterialRowComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MaterialRowComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MaterialRowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/kbo/dev_java/git/angular/src/app/material/material-row.component.spec.js.map