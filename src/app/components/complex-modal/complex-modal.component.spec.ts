import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComplexModalComponent } from './complex-modal.component';

describe('ComplexModalComponent', () => {
    let component: ComplexModalComponent;
    let fixture: ComponentFixture<ComplexModalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ComplexModalComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ComplexModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
