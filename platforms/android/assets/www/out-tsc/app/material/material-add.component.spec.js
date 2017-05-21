import { async, TestBed } from '@angular/core/testing';
import { MaterialAddComponent } from './material-add.component';
describe('MaterialAddComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MaterialAddComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MaterialAddComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/kbo/dev_java/git/angular/src/app/material/material-add.component.spec.js.map