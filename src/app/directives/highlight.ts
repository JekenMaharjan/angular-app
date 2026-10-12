import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[appHighlight]',
})
export class Highlight {
    constructor() { }

    // Automatically sets the text color to red on whatever element it's placed on
    @HostBinding('style.color') textColor = 'red';
}
