import { Directive, OnInit, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[propertyBindingDirective]'
})
export class CustomPropertyBindingDirective implements OnInit {

    @Input() defaultColor = 'transparent';
    @Input() bgColor = 'blue';

    @HostBinding('style.backgroundColor') backgroundColor = 'this.bgColor';

    @HostListener('mouseenter') mouseenter(eventData: Event) {
        this.backgroundColor = this.bgColor;
    }
    @HostListener('mouseleave') mouseleave(eventData: Event) {
        this.backgroundColor = this.defaultColor;
    }
    constructor() {}
    ngOnInit() {}
}
