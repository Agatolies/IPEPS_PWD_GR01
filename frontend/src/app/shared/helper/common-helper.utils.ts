import { Page } from '@shared/model';
import { DataType } from '@shared/module/data-list/component/data-list/data-list.config';

export class CommonHelperUtils {

  public static generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16;//random number between 0 and 16
      if (d > 0) {//Use timestamp until depleted
        r = (d + r) % 16 | 0;
        d = Math.floor(d / 16);
      } else {//Use microseconds since page-load if supported
        r = (d2 + r) % 16 | 0;
        d2 = Math.floor(d2 / 16);
      }
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }

  public static getDefaultValueForType(type: DataType): any {
    switch (type) {
      case DataType.BOOLEAN:
        return false;
      case DataType.GENDER:
        return 'OTHER';
      case DataType.STRING:
        return '';
    }
  }

  public static cleanEmptyPropertyOfObject(obj: any): any {
    Object.keys(obj).forEach(key => {
      // @ts-ignore
      if (obj[key] === '') {
        // @ts-ignore
        delete obj[key];
      }
    });
    return obj;
  }

  static defaultPagination(): Page {
    return {
      last: true,
      totalPages: 0,
      totalElements: 0,
      size: 10,
      number: 0,
      sort: {
        sorted: true,
        unsorted: false,
        empty: false
      },
      first: true,
      numberOfElements: 0,
      empty: false
    }
  }

  static paginationFromList(param: any): Page {
    return {
      last: param.last,
      totalPages: param.totalPages,
      totalElements: param.totalElements,
      size: param.size,
      number: param.number,
      sort: param.sort,
      first: param.first,
      numberOfElements: param.numberOfElements,
      empty: param.empty
    };
  }

  static getPageObject(page: Page, pageNumber: number) {
    let to = (pageNumber + 1) * page.numberOfElements;
    return {
      from: pageNumber * page.numberOfElements,
      of: page.totalElements,
      to: (to <= page.totalElements) ? to : page.totalElements
    };
  }
}
