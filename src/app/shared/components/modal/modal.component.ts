import {
    Component,
    AfterViewInit,
    ComponentRef,
    ElementRef,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation,
    ChangeDetectorRef,
} from '@angular/core';
import { DefaultModalOptions } from '../../services/ui-modal/defaults/modal-options.default';
import { ModalOptions } from '../../services/ui-modal/models/modal-options.model';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements AfterViewInit {
    options: ModalOptions;
    self!: ComponentRef<ModalComponent>;

    @ViewChild('modalBackdropRef')
    modalBackdropRef!: ElementRef<HTMLDivElement>;

    @ViewChild('modalRef')
    modalRef!: ElementRef<HTMLDivElement>;

    @ViewChild('modalViewRef', {
        read: ViewContainerRef,
    })
    viewContainerRef!: ViewContainerRef;

    constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
        this.options = structuredClone(DefaultModalOptions);
    }

    private isModal(element: HTMLDivElement): boolean {
        return this.modalRef.nativeElement !== element.firstElementChild;
    }

    private isBackdrop(element: HTMLDivElement): boolean {
        return this.modalBackdropRef.nativeElement !== element.firstElementChild;
    }

    deleteModal(): void {
        this.self.destroy();

        if (this.options.onClose && this.options.onClose instanceof Function) {
            this.options.onClose();
        }
    }

    ngAfterViewInit() {
        const component = this.options.component;
        if (component) {
            this.viewContainerRef.createComponent(component);
        }

        // Important: Re-evaluate the component change-detection
        // This is done because of Error: NG100: ExpressionChangedAfterItHasBeenCheckedError
        this.changeDetectorRef.detectChanges();
    }

    onCloseButtonClick(): void {
        this.deleteModal();

        if (this.options.onClose && this.options.onClose instanceof Function) {
            this.options.onClose();
        }
    }

    onBounceAnimation(event: MouseEvent): void {
        const element = <HTMLDivElement>event.target;

        if (this.isModal(element)) {
            return;
        }

        if (this.isBackdrop(element) && this.options.clickBackdropToClose) {
            return this.deleteModal();
        }

        // DOM-trick to rerun the animation using css-class
        this.modalRef.nativeElement.classList.remove('app-animation--bounce');
        const offsetWidth = this.modalRef.nativeElement.offsetWidth;
        this.modalRef.nativeElement.setAttribute('data-offset-width', offsetWidth.toString());
        this.modalRef.nativeElement.classList.add('app-animation--bounce');
    }
}
