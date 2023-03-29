import { ToastOptions } from '../models/toast-options.model';
import { ToastType } from '../types/toast.type';

export const DefaultToastOptions: ToastOptions = {
    id: -1,
    title: 'Default title',
    message: undefined,
    type: ToastType.Info,
    onClose: undefined,
};
