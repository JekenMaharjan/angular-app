import { Directive, signal } from '@angular/core';

@Directive({
    selector: '[appHoverEffect]',
    host: {
        '(mouseenter)': 'isHovered.set(true)',
        '(mouseleave)': 'isHovered.set(false)',
        '[class.bg-yellow-500]': 'isHovered()',
    },
})
export class HoverEffect {
    constructor() { }

    protected isHovered = signal(false);
}
