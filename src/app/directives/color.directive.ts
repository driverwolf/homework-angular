import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective implements OnInit {
  @Input('appColor') color: number;

  constructor(private el: ElementRef) {}
  ngOnInit() {
    let newColor = '';
    if (this.color == 0 || this.color <= 5) {
      newColor = 'red';
    } else if (this.color > 5 && this.color <= 8) {
      newColor = 'orange';
    } else {
      newColor = 'green';
    }
    this.el.nativeElement.style.color = newColor;
  }
}
