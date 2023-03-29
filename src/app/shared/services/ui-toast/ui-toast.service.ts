import { Injectable, ViewContainerRef } from '@angular/core';
import { ToastComponent } from '../../components/toast/toast.component';
import { DefaultToastOptions } from './defaults/toast-options.default';
import { ToastOptions } from './models/toast-options.model';
import { ToastType } from './types/toast.type';

/**
 * About: Service responsible for creating a new Toast instance
 */
@Injectable({
    providedIn: 'root',
})
export class UiToastService {
    private viewContainerRef!: ViewContainerRef;

    private readonly queue: Array<ToastOptions>;
    private readonly toasts: Array<ToastComponent>;

    private iterator: number;

    constructor() {
        this.queue = [];
        this.toasts = [];

        this.iterator = 0;
    }

    private createToast(options: any): ToastComponent | void {
        options = { ...DefaultToastOptions, ...options };

        if (!this.viewContainerRef) {
            this.queue.push(options);
            return;
        }

        // Create new ToastComponent
        const toastRef = this.viewContainerRef.createComponent(ToastComponent);
        toastRef.instance.options.id = this.iterator++;
        toastRef.instance.options.title = options.title;
        toastRef.instance.options.message = options.message;
        toastRef.instance.options.type = options.type;
        toastRef.instance.options.onClose = options.onClose;
        toastRef.instance.self = toastRef;

        // Store all created toast in internal collection
        this.toasts.push(toastRef.instance);

        return toastRef.instance;
    }

    setViewContainerRef(viewContainerRef: ViewContainerRef): void {
        this.viewContainerRef = viewContainerRef;
    }

    handleQueue(): void {
        this.queue.forEach(options => {
            this.createToast(options);
        });
    }

    length(): number {
        return this.toasts.length || 0;
    }

    removeToast(toast: ToastComponent): void {
        this.toasts.splice(
            this.toasts.findIndex(item => {
                return item.options.id === toast.options.id;
            }),
            1
        );
    }

    clearAllToasts(): number {
        const length = this.toasts.length;

        this.toasts.splice(0, this.toasts.length);
        this.viewContainerRef.clear();

        return length;
    }

    createInfoToast(options: any): ToastComponent | void {
        return this.createToast({ ...options, type: ToastType.Info });
    }

    createSuccessToast(options: any): ToastComponent | void {
        return this.createToast({ ...options, type: ToastType.Success });
    }

    createWarningToast(options: any): ToastComponent | void {
        return this.createToast({ ...options, type: ToastType.Warning });
    }

    createErrorToast(options: any): ToastComponent | void {
        return this.createToast({ ...options, type: ToastType.Error });
    }
}
