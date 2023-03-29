# Angular Ui Services

## About
Services for dynamically creating Dialog-, Modal- and Toast components.

## Usage
To create a new Dialog, Modal or Toast, simply inject the target service in any component or service. Use any of the code samples below and modify it to suit your needs. Advanced modal windows can be easily created in terms of both design and logic by providing the service with a reference to a standalone component that is constructed in the window.

1. [Dialogs](#dialogs)
2. [Modals](#modals)
3. [Toasts](#toasts)

### Dialogs
```typescript
class MyComponent {
    constructor(
        private readonly uiDialog: UiDialogService
    ) { }

    onAlertDialogClick(): void {
        // (1). Basic alert
        const dialog = this.uiDialog.createAlertDialog({
            title: 'Title',
            content: 'Content'
        });

        // (2). Closing a alert-dialog from code
        window.setTimeout(() => {
            dialog.deleteDialog();
        }, 2000);

        // (3). All options and callbacks
        const dialog = this.uiDialog.createAlertDialog({
            title: 'Title',
            content: 'Content',
            okButtonText: 'Got it!',
            clickBackdropToClose: false,
            onClose: () => {
                console.log('Dialog closed');
            },
            onOk: () => {
                console.log('Dialog ok');
            }
        });
    }

    onConfirmDialogClick(): void {
        // (1). Basic confirm
        const dialog = this.uiDialog.createConfirmDialog({
            title: 'Title',
            content: 'Content'
        });

        // (2). Closing a confirm-dialog from code
        window.setTimeout(() => {
            dialog.deleteDialog();
        }, 2000);

        // (3). All options and callbacks
        const dialog = this.uiDialog.createConfirmDialog({
            title: 'Title',
            content: 'Content',
            yesButtonText: 'Go',
            cancelButtonText: 'Abort',
            isDanger: true,
            onClose: () => {
                console.log('Dialog closed');
            },
            onYes: () => {
                console.log('Dialog Yes');
            },
            onCancel: () => {
                console.log('Dialog Cancel');
            }
        });
    }

    onPromptDialogClick(): void {
        // (1). Basic prompt
        const dialog = this.uiDialog.createPromptDialog({
            title: 'Title',
            content: 'Content'
        });

        // (2). Closing a prompt-dialog from code
        window.setTimeout(() => {
            dialog.deleteDialog();
        }, 2000);

        // (3). All options and callbacks
        const dialog = this.uiDialog.createPromptDialog({
            title: 'Title',
            content: 'Content',
            yesButtonText: 'Delete',
            cancelButtonText: 'Abort',
            value: '1234',
            isDanger: true,
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
            }
        });
    }

    onSelectDialogClick(): void {
        // (1). Basic select
        const dialog = this.uiDialog.createSelectDialog({
            title: 'Title',
            content: 'Content'
        });

        // (2). Closing a select-dialog from code
        window.setTimeout(() => {
            dialog.deleteDialog();
        }, 2000);

        // (3). All options and callbacks
        const dialog = this.uiDialog.createSelectDialog({
            title: 'Title',
            content: 'Content',
            yesButtonText: 'Delete',
            cancelButtonText: 'Abort',
            options: [
                {
                    key: 'Option 1',
                    value: 'Value 1'
                },
                {
                    key: 'Option 2',
                    value: 'Value 2'
                },
                {
                    key: 'Option 3',
                    value: 'Value 3'
                }
            ],
            isDanger: true,
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
            }
        });
    }
}
```

### Modals
```typescript
class MyComponent {
    constructor(
        private readonly uiModal: UiModalService
    ) { }

    onModalTestClick(): void {
        // (1). Basic modal
        const modal = this.uiModal.createModal({
            title: 'Title', 
            content: 'Content'
        });

        // (2). Closing a modal from code
        window.setTimeout(() => {
            modal.deleteModal();
        }, 2000);

        // (3). All options and callbacks
        const modal = this.uiModal.createModal({
            title: 'Title', 
            content: 'Content/HTML',
            clickBackdropToClose: true,
            onClose: () => {
                console.log('Modal closed');
            }
        });

        // (4). Load components in the modal
        const component = MyComplexDeviationComponent;
        this.modal.createModal({
            title: 'Deviation report',
            component: component,
        });
    }
}
```

### Toasts
```typescript
class MyComponent {
    constructor(
        private readonly uiToast: UiToastService
    ) { }

    onToastTestClick(): void {
        // (1). Basic toast
        const toast = this.uiToast.createInfoToast({
            title: 'Title'
        });

        // (2). Closing a toast from code
        window.setTimeout(() => {
            toast?.deleteToast();
        }, 2000);

        // (3). All options and callbacks
        const toast = this.uiToast.createInfoToast({
            title: 'Title', 
            message: 'Detailed content',
            onClose: () => {
                console.log('Toast closed');
            }
        });

        // (4). Different styles available
        const infoToast = this.uiToast.createInfoToast({ 
            title: 'Title' 
        });

        const successToast = this.uiToast.createSuccessToast({ 
            title: 'Title' 
        });

        const warningToast = this.uiToast.createWarningToast({ 
            title: 'Title' 
        });

        const errorToast = this.uiToast.createErrorToast({ 
            title: 'Title' 
        });
    }
}
```

## Author
[Qulle](https://github.com/qulle/)
