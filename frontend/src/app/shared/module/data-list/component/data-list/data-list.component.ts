import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuActionType, PayloadInterface, SortEnum, SortFilter } from '@shared/model';
import { DataListConfig, FieldConfig } from '@shared/module/data-list/component/data-list/data-list.config';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {
  @Input() list!: any[];
  @Input() searchFilter?: PayloadInterface;
  @Input() showFilter = true;
  @Input() sortable = true;
  @Input() config!: DataListConfig;
  @Input() searchPlaceholder: string = 'common.search';
  @Input() sort!: SortFilter;

  @Input() translateKey = '';
  @Output() filterChange = new EventEmitter<PayloadInterface>();
  @Output() sortChange = new EventEmitter<SortFilter | null>();
  @Output() onShowFilter = new EventEmitter<any>();
  @Output() onClickAction: EventEmitter<{ action: MenuActionType, data: any }> = new EventEmitter<{ action: MenuActionType, data: any }>();
  @Output() onShowDeleted = new EventEmitter<any>();
  menuActionType = MenuActionType;
  sortEnum= SortEnum;
  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(action: MenuActionType, data: any) {
    this.onClickAction.emit({action, data})
  }

  onDrop(event: Event) {
    event.preventDefault();
    alert('on drop');
  }

  sortIt(field: FieldConfig): void {
    if (this.sortable) {
      if (this.sort.field === field.param) {
        this.sort.sort = (this.sort.sort === SortEnum.ASC) ? SortEnum.DESC : SortEnum.ASC;
        this.sort = {...this.sort};
      } else {
        this.sort = {field: field.param, sort: SortEnum.ASC}
      }
    }
    this.sortChange.emit(this.sort);
  }
}
