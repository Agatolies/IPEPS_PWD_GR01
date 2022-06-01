import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DialogConfigInterface } from '@shared/model';
import { DialogService } from '@shared/service';
import { CommonHelperUtils } from '@shared/helper';

@Component({
  selector: 'app-dialog-filter',
  templateUrl: './dialog-filter.component.html',
  styleUrls: ['./dialog-filter.component.scss']
})
export class DialogFilterComponent implements OnInit, OnChanges {
  @Input() title: string = 'common.filter.title';
  @Input() showDialog = false;
  @Output() filterChange = new EventEmitter<boolean>();
  @Output() onClose = new EventEmitter<void>();
  dialogConfig = CommonHelperUtils.generateUUID();

  constructor(public dialogService: DialogService) {
  }

  ngOnInit(): void {
    this.dialogService.addDialog(this.dialogConfig, '700px', '500px');
  }

  getConfig(index: string): DialogConfigInterface | undefined {
    const configs = this.dialogService.dialogConfigs$.getValue();
    return configs.find((d: DialogConfigInterface) => d.id === index);
  }

  openDialog(): void {
    this.dialogService.toggleShow(this.dialogConfig, this.showDialog);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.openDialog()
  }

  filter(close: boolean): void {
    this.filterChange.emit(close);
  }

  close(): void {
    this.onClose.emit();
  }
}
