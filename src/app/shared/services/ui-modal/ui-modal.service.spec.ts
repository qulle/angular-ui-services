import { TestBed } from '@angular/core/testing';
import { UiModalService } from './ui-modal.service';

describe('UiModalService', () => {
    let service: UiModalService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UiModalService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
