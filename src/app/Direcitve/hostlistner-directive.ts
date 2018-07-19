import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[hostListnerDirective]'
})

export class HostListnerDirective implements OnInit {

    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
    }

    @HostListener('mouseenter') mouseenter(eventData: Event) {
        this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        this.renderer.setStyle(this.elRef.nativeElement, 'color', 'green');
    }
}
