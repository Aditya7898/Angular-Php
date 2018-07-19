import { Directive, OnInit, HostBinding, ElementRef, HostListener } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[hostbindingDrective]'
})

export class HostBindingDirective implements OnInit {

    @HostBinding('style.backgroundColor') backgroundColor: string;

    constructor(private elRef: ElementRef) {}
    ngOnInit() {}

    @HostListener('mouseenter') mouseenter(eventData: Event) {
        this.backgroundColor = 'red';
    }
    @HostListener('mouseleave') mouseleave(eventData: Event) {
        this.backgroundColor = 'green';
    }
}
