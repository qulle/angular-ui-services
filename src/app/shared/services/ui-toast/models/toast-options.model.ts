import { ToastType } from '../types/toast.type';

export interface ToastOptions {
    id: number;
    title: string;
    message: string | undefined;
    type: ToastType;
    onClose: (() => void) | undefined;
}
