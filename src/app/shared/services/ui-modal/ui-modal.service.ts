import { Injectable, ViewContainerRef } from '@angular/core';
import { ModalComponent } from '../../components/modal/modal.component';
import { DefaultModalOptions } from './defaults/modal-options.default';

/**
 * About: Service responsible for creating a new Modal instance
 */
@Injectable({
    providedIn: 'root',
})
export class UiModalService {
    private viewContainerRef!: ViewContainerRef;

    setViewContainerRef(viewContainerRef: ViewContainerRef): void {
        this.viewContainerRef = viewContainerRef;
    }

    createModal(options: any): ModalComponent {
        options = { ...DefaultModalOptions, ...options };

        // Create new ModalComponent
        const modalRef = this.viewContainerRef.createComponent(ModalComponent);
        modalRef.instance.options.title = options.title;
        modalRef.instance.options.content = options.content;
        modalRef.instance.options.component = options.component;
        modalRef.instance.options.clickBackdropToClose = options.clickBackdropToClose;
        modalRef.instance.options.onClose = options.onClose;
        modalRef.instance.self = modalRef;

        return modalRef.instance;
    }
}
