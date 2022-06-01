import { Component, Input, OnInit } from '@angular/core';
import { DialogConfigInterface } from '@shared/model';
import { DialogService } from '@shared/service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() config?: DialogConfigInterface;

  constructor(public dialogService: DialogService) {
  }

  ngOnInit() {
  }

  onClick(): void {
    if (!this.config!.isFirstPlan) {
      this.dialogService.setFirst(this.config!.id);
    }
  }
  onClose():void{
    this.dialogService.toggleShow(this.config!.id,false);
  }
}
