import {Directive, ElementRef, Input} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Directive({
  selector: '[keyBooleanTranslate]'
})
export class BooleanTranslateDirective {

  constructor(private _elementRef: ElementRef, private translateService: TranslateService) { }

  @Input('keyBooleanTranslate') keyBooleanTranslate:string = '';
  @Input('typeBooleanTranslate') typeBooleanTranslate:string = '';

  ngOnInit(): void {
    if (this.typeBooleanTranslate == 'BOOLEAN') {
      this._elementRef.nativeElement.innerHTML = this.translateService.instant('common.' + this.keyBooleanTranslate);
    }
  }

}
