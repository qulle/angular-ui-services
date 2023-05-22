import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ComplexModalComponent } from './components/complex-modal/complex-modal.component';
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
        this.uiDialog.createAlertDialog({
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
        this.uiDialog.createConfirmDialog({
            title: 'Confirm',
            content: 'This is a confirm dialog',
            yesButtonText: 'Confirm',
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
        this.uiDialog.createPromptDialog({
            title: 'Prompt',
            content: 'This is a prompt dialog',
            yesButtonText: 'Set value',
            cancelButtonText: 'Abort',
            value: '1234',
            placeholder: 'Enter value',
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
        this.uiDialog.createSelectDialog({
            title: 'Select',
            content: 'This is a select dialog',
            yesButtonText: 'Set value',
            cancelButtonText: 'Abort',
            value: 'Value 2',
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

    onCreateSimpleModal(): void {
        this.uiModal.createModal({
            title: 'Simple modal',
            content: 'This is a <strong>simple</strong> modal window',
            clickBackdropToClose: false,
            onClose: () => {
                console.log('Modal closed');
            },
        });
    }

    onCreateComplexModal(): void {
        const component = ComplexModalComponent;
        this.uiModal.createModal({
            title: 'Complex modal',
            component: component,
        });
    }

    // 3. Toasts

    onCreateInfoToast(): void {
        this.uiToast.createInfoToast({
            title: 'Info',
            message: 'This is a information toast',
            onClose: () => {
                console.log('Toast closed');
            },
        });
    }

    onCreateSuccessToast(): void {
        this.uiToast.createSuccessToast({
            title: 'Success',
            message: 'This is a success toast',
            onClose: () => {
                console.log('Toast closed');
            },
        });
    }

    onCreateWarningToast(): void {
        this.uiToast.createWarningToast({
            title: 'Warning',
            message: 'This is a warning toast',
            onClose: () => {
                console.log('Toast closed');
            },
        });
    }

    onCreateErrorToast(): void {
        this.uiToast.createErrorToast({
            title: 'Error',
            message: 'This is a error toast',
            onClose: () => {
                console.log('Toast closed');
            },
        });
    }
}
