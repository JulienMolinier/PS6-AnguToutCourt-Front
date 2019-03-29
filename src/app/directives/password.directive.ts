import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appPassword]'
})
export class PasswordDirective {

  private shown = false;

  constructor(private element: ElementRef) {
    this.setup();
  }

  toggle(swap: HTMLElement) {
    this.shown = !this.shown;
    if (this.shown) {
      this.element.nativeElement.setAttribute('type', 'text');
      swap.innerHTML = 'Hide';
    } else {
      this.element.nativeElement.setAttribute('type', 'password');
      swap.innerHTML = 'Show';
    }
  }

  setup() {
    const parent = this.element.nativeElement.parentNode;
    const span = document.createElement('span');
    span.innerHTML = `Show`;
    span.addEventListener('click', (event) => {
      this.toggle(span);
    });
    parent.appendChild(span);
  }
}


