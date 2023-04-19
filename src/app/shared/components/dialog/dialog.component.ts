import {
    Component,
    ComponentRef,
    ElementRef,
    ViewChild,
    OnInit,
    AfterViewInit,
} from '@angular/core';
import { trapFocus } from '../../services/helpers/TrapFocus';
import { DefaultDialogOptions } from '../../services/ui-dialog/defaults/dialog-options.default';
import { DialogOptions } from '../../services/ui-dialog/models/dialog-options.model';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit, AfterViewInit {
    options: DialogOptions;
    self!: ComponentRef<DialogComponent>;

    @ViewChild('dialogBackdropRef')
    dialogBackdropRef!: ElementRef<HTMLDivElement>;

    @ViewChild('dialogRef')
    dialogRef!: ElementRef<HTMLDivElement>;

    constructor() {
        this.options = structuredClone(DefaultDialogOptions);
    }

    ngOnInit(): void {
        // If no specific value was given, select the first item
        if (this.options.options.length > 0 && this.options.value.length <= 0) {
            this.options.value = this.options.options[0].value;
        }
    }

    ngAfterViewInit(): void {
        this.dialogRef.nativeElement.focus();
        this.dialogRef.nativeElement.addEventListener('keydown', trapFocus);
    }

    private isSelf(element: HTMLDivElement): boolean {
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

        if (this.options.onClose) {
            this.options.onClose();
        }
    }

    onValueChange(event: Event): void {
        const target = <HTMLInputElement>event.target;
        this.options.value = target.value;

        if (this.options.onValueChange && target.value.trim().length > 0) {
            this.options.onValueChange(target.value.trim());
        }
    }

    onSelectChange(event: Event): void {
        const target = <HTMLInputElement>event.target;
        this.options.value = target.value;

        if (this.options.onSelectChange) {
            this.options.onSelectChange(target.value.trim());
        }
    }

    onOkButtonClick(): void {
        this.deleteDialog();

        if (this.options.onOk) {
            this.options.onOk();
        }
    }

    onYesButtonClick(): void {
        this.deleteDialog();

        if (this.options.onYes) {
            if (
                (this.options.isPrompt || this.options.isSelect) &&
                this.options.value.trim().length > 0
            ) {
                this.options.onYes(this.options.value.trim());
            } else {
                this.options.onYes();
            }
        }
    }

    onCancelButtonClick(): void {
        this.deleteDialog();

        if (this.options.onCancel) {
            this.options.onCancel();
        }
    }

    onBounceAnimation(event: MouseEvent): void {
        const element = <HTMLDivElement>event.target;

        if (this.isSelf(element)) {
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
