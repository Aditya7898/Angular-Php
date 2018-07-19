import { Directive, OnInit, Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[betterDirective]'
})

export class BetterDirective implements OnInit {

    constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
       this.renderer.setStyle(this.elRef.nativeElement, 'background', 'blue');
    }
}


//   angular is not limited to dom while it is works with service workers
//  in these service workers u may not access dom. so if u wnt to change
//   dom it may not work or get error
