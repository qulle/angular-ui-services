import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComplexModalComponentComponent } from './complex-modal-component.component';

describe('ComplexModalComponentComponent', () => {
    let component: ComplexModalComponentComponent;
    let fixture: ComponentFixture<ComplexModalComponentComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ComplexModalComponentComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ComplexModalComponentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
