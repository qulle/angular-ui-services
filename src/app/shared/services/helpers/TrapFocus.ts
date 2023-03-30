const trapFocus = function (this: HTMLDivElement, event: KeyboardEvent) {
    const isTabKey = event.key === 'Tab';

    if (!isTabKey) {
        return;
    }

    const elements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const firstElement = this.querySelectorAll(elements)[0] as HTMLElement;
    const content = this.querySelectorAll(elements);
    const lastElement = content[content.length - 1] as HTMLElement;

    if (event.shiftKey) {
        if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
        }
    } else {
        if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
        }
    }
};

export { trapFocus };
