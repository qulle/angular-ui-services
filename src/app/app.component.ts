import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { UiDialogService } from './shared/services/ui-dialog/ui-dialog.service';
import { UiModalService } from './shared/services/ui-modal/ui-modal.service';
import { UiToastService } from './shared/services/ui-toast/ui-toast.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
    title = 'angular-ui-services';

    @ViewChild('appContainerRef', {
        read: ViewContainerRef,
    })
    appContainerRef!: ViewContainerRef;

    @ViewChild('appToastContainerRef', {
        read: ViewContainerRef,
    })
    appToastContainerRef!: ViewContainerRef;

    constructor(
        private readonly uiDialog: UiDialogService,
        private readonly uiModal: UiModalService,
        private readonly uiToast: UiToastService
    ) {}

    ngAfterViewInit(): void {
        this.uiModal.setViewContainerRef(this.appContainerRef);
        this.uiDialog.setViewContainerRef(this.appContainerRef);
        this.uiToast.setViewContainerRef(this.appToastContainerRef);
    }

    // 1. Dialogs

    onCreateAlertDialog(): void {
        const dialog = this.uiDialog.createAlertDialog({
            title: 'Alert',
            content: 'This is a altert dialog',
            okButtonText: 'Got it!',
            clickBackdropToClose: false,
            onClose: () => {
                console.log('Dialog closed');
            },
            onOk: () => {
                console.log('Dialog ok');
            },
        });
    }

    onCreateConfirmDialog(): void {
        const dialog = this.uiDialog.createConfirmDialog({
            title: 'Confirm',
            content: 'This is a confirm dialog',
            yesButtonText: 'Go!',
            cancelButtonText: 'Abort',
            isDanger: false,
            onClose: () => {
                console.log('Dialog closed');
            },
            onYes: () => {
                console.log('Dialog Yes');
            },
            onCancel: () => {
                console.log('Dialog Cancel');
            },
        });
    }

    onCreatePromptDialog(): void {
        const dialog = this.uiDialog.createPromptDialog({
            title: 'Prompt',
            content: 'This is a prompt dialog',
            yesButtonText: 'Set value',
            cancelButtonText: 'Abort',
            value: '1234',
            isDanger: false,
            onClose: () => {
                console.log('Dialog closed');
            },
            onYes: (value: string) => {
                console.log('Dialog Yes, new value', value);
            },
            onCancel: () => {
                console.log('Dialog Cancel');
            },
            onValueChange: (value: string) => {
                console.log('Value changed', value);
            },
        });
    }

    onCreateSelectDialog(): void {
        const dialog = this.uiDialog.createSelectDialog({
            title: 'Select',
            content: 'This is a select dialog',
            yesButtonText: 'Set value',
            cancelButtonText: 'Abort',
            options: [
                {
                    key: 'Option 1',
                    value: 'Value 1',
                },
                {
                    key: 'Option 2',
                    value: 'Value 2',
                },
                {
                    key: 'Option 3',
                    value: 'Value 3',
                },
            ],
            isDanger: false,
            onClose: () => {
                console.log('Dialog closed');
            },
            onYes: (value: string) => {
                console.log('Dialog Yes, new value', value);
            },
            onCancel: () => {
                console.log('Dialog Cancel');
            },
            onSelectChange: (value: string) => {
                console.log('Value changed', value);
            },
        });
    }

    // 2. Modals

    // 3. Toasts
}
