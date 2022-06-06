import {Component, OnInit} from '@angular/core';
import {Toast} from '@shared/model';
import {ToasterService} from '@shared/service';

@Component({
  selector: 'app-toaster-container',
  templateUrl: './toaster-container.component.html',
  styleUrls: ['./toaster-container.component.scss']
})
export class ToasterContainerComponent implements OnInit {
  toasts: Toast[] = [];

  constructor(public toasterService: ToasterService) {
  }

  ngOnInit(): void {
    this.toasterService.toaster$
      .subscribe(toast => {
        this.toasts = [toast, ...this.toasts];
        setTimeout(() => this.toasts.pop(), toast.delay || 3000);
      });
  }

  remove(index: number): void {
    this.toasts = this.toasts.filter((v, i) => i !== index);
  }

}
