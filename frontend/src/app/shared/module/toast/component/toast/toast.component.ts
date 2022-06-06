import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Toast, ToastType } from '@shared/model';


@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  @Input() toast!: Toast;
  @Input() index!: number;
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();
  icon: string = 'fa-light fa-circle-check'

  constructor() {
  }

  ngOnInit(): void {
    switch (this.toast.type) {
      case ToastType.INFO:
        this.icon = 'fa-light fa-circle-info';
        break;
      case ToastType.SUCCESS:
        this.icon = 'fa-light fa-circle-check';
        break;
      case ToastType.WARNING:
        this.icon = 'fa-light fa-circle-exclamation';
        break;
      case ToastType.ERROR:
        this.icon = 'fa-light fa-ban-bug';
        break;
    }
  }

  onClick() {
    this.remove.emit(this.index);
  }
}
