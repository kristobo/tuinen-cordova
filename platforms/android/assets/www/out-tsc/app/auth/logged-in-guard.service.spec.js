/* tslint:disable:no-unused-variable */
import { TestBed, inject } from '@angular/core/testing';
import { LoggedInGuard } from './logged-in-guard.service';
describe('LoggedInGuard', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [LoggedInGuard]
        });
    });
    it('should ...', inject([LoggedInGuard], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=/Users/kbo/dev_java/git/angular/src/app/auth/logged-in-guard.service.spec.js.map