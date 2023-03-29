import { DialogOptions } from '../models/dialog-options.model';

export const DefaultDialogOptions: DialogOptions = {
    isDanger: false,
    isAlert: false,
    isConfirm: false,
    isPrompt: false,
    isSelect: false,
    options: [],
    title: 'Default title',
    content: 'Default content',
    value: '',
    okButtonText: 'Ok',
    yesButtonText: 'Yes',
    cancelButtonText: 'Cancel',
    clickBackdropToClose: false,
    onClose: undefined,
    onOk: undefined,
    onYes: undefined,
    onCancel: undefined,
    onValueChange: undefined,
    onSelectChange: undefined,
};
