import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Chip, PayloadInterface, SortFilter } from '@shared/model';
import { isNil } from 'lodash';
import { CommonHelperUtils } from '@shared/helper';
import { DataType } from '@shared/module/data-list/component/data-list/data-list.config';

@Component({
  selector: 'app-filter-area',
  templateUrl: './filter-area.component.html',
  styleUrls: ['./filter-area.component.scss']
})
export class FilterAreaComponent implements OnInit, OnChanges {
  @Input() searchPlaceholder: string = 'common.search';
  @Input() searchFilter?: PayloadInterface;
  @Input() sort!: SortFilter;
  @Input() translateKey = '';
  @Output() filterChange = new EventEmitter<any>();
  @Output() removeSort = new EventEmitter<void>();
  @Output() onShowFilter = new EventEmitter<any>();
  @Output() onShowDeleted = new EventEmitter<any>();
  globalSearch = '';
  chips: Chip[] = [];
  sortChip?: Chip;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getFilter();
  }

  getFilter(): void {
    if (this.searchFilter) {
      this.chips = Object.keys(this.searchFilter).filter((key: string) => {
        // @ts-ignore
        return !isNil(this.searchFilter[key]) && this.searchFilter[key].length > 0;
      }).map((key: string) => {
        return {
          translateKey: this.translateKey,
          label: key,
          // @ts-ignore
          value: this.searchFilter[key],
          // @ts-ignore
          valueType: (typeof this.searchFilter[key]).toUpperCase() as DataType
        }
      });
    }
    if (this.sort) {
      this.sortChip = {
        label: this.sort.field,
        translateKey: this.translateKey,
        value: `enum.sort.${this.sort.sort}`,
        valueType: DataType.STRING
      }
    }
  }

  globalFilter(): void {
    this.filterChange.emit({allFields: this.globalSearch})
    this.chips = [{translateKey: 'common.filter.', label: 'all', value: this.globalSearch, valueType: DataType.STRING}]
  }

  removeChip(chip: Chip): void {
    // @ts-ignore
    this.searchFilter[chip.label] = CommonHelperUtils.getDefaultValueForType(chip.valueType);
    this.filterChange.emit(this.searchFilter);
  }
}
