import { Component, ComponentRef } from '@angular/core';
import { DefaultToastOptions } from '../../services/ui-toast/defaults/toast-options.default';
import { ToastOptions } from '../../services/ui-toast/models/toast-options.model';
import { UiToastService } from '../../services/ui-toast/ui-toast.service';

@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss'],
})
export class ToastComponent {
    options: ToastOptions;
    self!: ComponentRef<ToastComponent>;

    constructor(private toast: UiToastService) {
        this.options = structuredClone(DefaultToastOptions);
    }

    onDeleteToast(): void {
        // Append animation when element is removed
        const toastElement = this.self.location.nativeElement.firstElementChild;
        toastElement.classList.remove('app-animation--slide-in');
        toastElement.classList.add('app-animation--slide-out');

        // Remove from internal toast collection
        this.toast.removeToast(this.self.instance);

        // Remove the element from the DOM after the animation finishes
        window.setTimeout(() => {
            this.self.destroy();

            if (this.options.onClose) {
                this.options.onClose();
            }
        }, 250);
    }
}
