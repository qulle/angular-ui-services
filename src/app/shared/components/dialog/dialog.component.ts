import { Component, ComponentRef, ElementRef, ViewChild } from '@angular/core';
import { DefaultDialogOptions } from '../../services/ui-dialog/defaults/dialog-options.default';
import { DialogOptions } from '../../services/ui-dialog/models/dialog-options.model';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
    options: DialogOptions;
    self!: ComponentRef<DialogComponent>;

    @ViewChild('dialogBackdropRef')
    dialogBackdropRef!: ElementRef<HTMLDivElement>;

    @ViewChild('dialogRef')
    dialogRef!: ElementRef<HTMLDivElement>;

    constructor() {
        this.options = structuredClone(DefaultDialogOptions);
    }

    private isDialog(element: HTMLDivElement): boolean {
        return this.dialogRef.nativeElement !== element.firstElementChild;
    }

    private isBackdrop(element: HTMLDivElement): boolean {
        return this.dialogBackdropRef.nativeElement !== element.firstElementChild;
    }

    deleteDialog(): void {
        this.self.destroy();
    }

    onCloseButtonClick(): void {
        this.deleteDialog();

        if (this.options.onClose && this.options.onClose instanceof Function) {
            this.options.onClose();
        }
    }

    onValueChange(event: Event): void {
        const target = <HTMLInputElement>event.target;
        this.options.value = target.value;

        if (this.options.onValueChange && this.options.onValueChange instanceof Function) {
            this.options.onValueChange(target.value);
        }
    }

    onSelectChange(event: Event): void {
        const target = <HTMLInputElement>event.target;
        this.options.value = target.value;

        if (this.options.onSelectChange && this.options.onSelectChange instanceof Function) {
            this.options.onSelectChange(target.value);
        }
    }

    onOkButtonClick(): void {
        this.deleteDialog();

        if (this.options.onOk && this.options.onOk instanceof Function) {
            this.options.onOk();
        }
    }

    onYesButtonClick(): void {
        this.deleteDialog();

        if (this.options.onYes && this.options.onYes instanceof Function) {
            if (this.options.isPrompt || this.options.isSelect) {
                this.options.onYes(this.options.value);
            } else {
                this.options.onYes();
            }
        }
    }

    onCancelButtonClick(): void {
        this.deleteDialog();

        if (this.options.onCancel && this.options.onCancel instanceof Function) {
            this.options.onCancel();
        }
    }

    onBounceAnimation(event: MouseEvent): void {
        const element = <HTMLDivElement>event.target;

        if (this.isDialog(element)) {
            return;
        }

        if (this.isBackdrop(element) && this.options.clickBackdropToClose) {
            return this.deleteDialog();
        }

        // DOM-trick to rerun the animation using css-class
        this.dialogRef.nativeElement.classList.remove('app-animation--bounce');
        const offsetWidth = this.dialogRef.nativeElement.offsetWidth;
        this.dialogRef.nativeElement.setAttribute('data-offset-width', offsetWidth.toString());
        this.dialogRef.nativeElement.classList.add('app-animation--bounce');
    }
}