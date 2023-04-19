import { Injectable, ViewContainerRef } from '@angular/core';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { DefaultDialogOptions } from './defaults/dialog-options.default';

/**
 * About: Service responsible for creating a new Dialog instance
 */
@Injectable({
    providedIn: 'root',
})
export class UiDialogService {
    private viewContainerRef!: ViewContainerRef;

    setViewContainerRef(viewContainerRef: ViewContainerRef): void {
        this.viewContainerRef = viewContainerRef;
    }

    private createDialog(options: any): DialogComponent {
        options = { ...DefaultDialogOptions, ...options };

        // Create new DialogComponent
        const dialogRef = this.viewContainerRef.createComponent(DialogComponent);
        dialogRef.instance.options.isDanger = options.isDanger;
        dialogRef.instance.options.isAlert = options.isAlert;
        dialogRef.instance.options.isConfirm = options.isConfirm;
        dialogRef.instance.options.isPrompt = options.isPrompt;
        dialogRef.instance.options.isSelect = options.isSelect;
        dialogRef.instance.options.options = options.options;
        dialogRef.instance.options.title = options.title;
        dialogRef.instance.options.content = options.content;
        dialogRef.instance.options.value = options.value;
        dialogRef.instance.options.placeholder = options.placeholder;
        dialogRef.instance.options.okButtonText = options.okButtonText;
        dialogRef.instance.options.yesButtonText = options.yesButtonText;
        dialogRef.instance.options.cancelButtonText = options.cancelButtonText;
        dialogRef.instance.options.clickBackdropToClose = options.clickBackdropToClose;
        dialogRef.instance.options.onClose = options.onClose;
        dialogRef.instance.options.onOk = options.onOk;
        dialogRef.instance.options.onYes = options.onYes;
        dialogRef.instance.options.onCancel = options.onCancel;
        dialogRef.instance.options.onValueChange = options.onValueChange;
        dialogRef.instance.options.onSelectChange = options.onSelectChange;
        dialogRef.instance.self = dialogRef;

        return dialogRef.instance;
    }

    createAlertDialog(options: any): DialogComponent {
        return this.createDialog({ ...options, isAlert: true });
    }

    createConfirmDialog(options: any): DialogComponent {
        return this.createDialog({ ...options, isConfirm: true });
    }

    createPromptDialog(options: any): DialogComponent {
        return this.createDialog({ ...options, isPrompt: true });
    }

    createSelectDialog(options: any): DialogComponent {
        return this.createDialog({ ...options, isSelect: true });
    }
}
