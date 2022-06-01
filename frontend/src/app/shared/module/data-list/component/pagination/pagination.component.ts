import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Page, PageFilter } from '@shared/model';
import { CommonHelperUtils } from '@shared/helper';

interface PageSelector {
  value: number;
  label: string;
  selected: boolean;
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() page: Page = CommonHelperUtils.defaultPagination();
  @Input() pageFilter: PageFilter = {pageSize: 10, pageNumber: 0}
  @Output() onPageFilterChange = new EventEmitter<PageFilter>();
  pageNumber: string = '' + this.pageFilter.pageSize;
  pages: PageSelector[] = [];
  pageObject: { to: number, from: number, of: number } = {to: 0, from: 0, of: 0}
  defaultNumber = [5, 10, 15, 20, 25, 50]
  showNumberSelector = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.pages = [];
    for (let i = 0; i < this.page.totalPages; i++) {
      this.pages.push({value: i, label: '' + (i + 1), selected: (this.pageFilter.pageNumber === i)})
    }
    this.pageObject = CommonHelperUtils.getPageObject(this.page, this.pageFilter.pageNumber);
  }

  setFilter(el: number): void {
    this.showNumberSelector = false;
    if (el != this.pageFilter.pageSize) {
      this.pageFilter = {
        pageSize: el,
        pageNumber: this.pageFilter.pageNumber
      }
      this.onPageFilterChange.emit(this.pageFilter);
    }
  }

  setPage(page: PageSelector): void {
    if (!page.selected) {
      this.pageFilter.pageNumber = page.value;
      this.onPageFilterChange.emit(this.pageFilter);
    }
  }
}
