import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Chip } from '@shared/model';
import { DataType } from '@shared/module/data-list/component/data-list/data-list.config';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {
  @Input() chip!: Chip;
  @Output() removeIt = new EventEmitter<Chip>();
  type = DataType;

  constructor() {
  }

  ngOnInit(): void {
  }

  remove(): void {
    this.removeIt.emit(this.chip);
  }
}
