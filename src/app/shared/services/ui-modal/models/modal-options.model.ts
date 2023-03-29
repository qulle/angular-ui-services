import { Type } from '@angular/core';

export interface ModalOptions {
    title: string;
    content: string;
    component: Type<any> | undefined;
    clickBackdropToClose: boolean;
    onClose: (() => void) | undefined;
}
