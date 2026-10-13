import { Component } from '@angular/core';
import { HoverEffect } from '../directives/hover-effect';
import { Highlight } from '../directives/highlight';

@Component({
    selector: 'app-test',
    imports: [Highlight, HoverEffect],
    templateUrl: './test.html',
    styleUrl: './test.css',
})
export class Test { }
