import { AfterViewChecked, ElementRef, NgZone, Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeDetection]'
})
export class ChangeDetectionDirective implements AfterViewChecked, OnInit {

  constructor(private zone: NgZone, private elementRef: ElementRef) {

  }

  ngOnInit(): void {
    const element = this.elementRef.nativeElement;
    element.classList.add('cd-tracked');
  }

  ngAfterViewChecked(): void {
    const element = this.elementRef.nativeElement;
    this.zone.runOutsideAngular(() => {
      element.classList.add('cd-inprogress');

      setTimeout(() => {
        element.classList.remove('cd-inprogress');
      }, 500);
    });
  }
}
