import { SelectOptions } from './select-options.model';

export interface DialogOptions {
    isDanger: boolean;
    isAlert: boolean;
    isConfirm: boolean;
    isPrompt: boolean;
    isSelect: boolean;
    options: Array<SelectOptions>;
    title: string;
    content: string;
    value: string;
    okButtonText: string;
    yesButtonText: string;
    cancelButtonText: string;
    clickBackdropToClose: boolean;
    onClose: (() => void) | undefined;
    onOk: (() => void) | undefined;
    onYes: ((value?: string) => void) | undefined;
    onCancel: (() => void) | undefined;
    onValueChange: ((value: string) => void) | undefined;
    onSelectChange: ((value: string) => void) | undefined;
}
