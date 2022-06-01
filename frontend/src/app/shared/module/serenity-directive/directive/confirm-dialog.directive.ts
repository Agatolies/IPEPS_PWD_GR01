import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { LabelWithParam } from '@shared/model';

@Component(
  {
    selector: '[confirm]',
    templateUrl: './confirm-dialog.template.html',
    styleUrls: ['./confirm-dialog.style.scss'],
  }
)
export class ConfirmDialogDirective {
  @Input() confirmMessage?: LabelWithParam;
  @Input() titleMessage?: LabelWithParam;
  @Output() confirm = new EventEmitter();
  show = false;

  //dimension
  top = ((window.innerHeight - 150) / 3) + 'px';
  left = ((window.innerWidth - 300) / 2) + 'px';

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('click', ['$event.target'])
  openConfirmation(target: any) {
    this.show = (this.elementRef.nativeElement.contains(target));
  }

  confirmAction() {
    this.show = false;
    this.confirm.emit();
  }

  close() {
    this.show = false;
  }
}
