import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive(
  {selector: '[appClickOutside]'}
)
export class ClickOutsideDirective {
  @Output() onClickOutSide = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {
  }
  @HostListener('document:click', ['$event.target'])
  documentClick(target: any) {
    if (!this.elementRef.nativeElement.contains(target)) {
      this.onClickOutSide.emit();
    }
  }
}
