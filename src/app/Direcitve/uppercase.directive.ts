import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[uppercase]'
})

export class UppercaseDirective implements OnInit {

    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {}
    @HostListener('keyup') onKeyUp() {
       this.elRef.nativeElement.value = this.elRef.nativeElement.value.toUpperCase();
    }

}
