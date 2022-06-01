import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-destroyable',
  templateUrl: './destroyable.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DestroyableComponent implements OnDestroy {

  destroyer$ = new Subject<void>();

  constructor() {
  }

  ngOnDestroy(): void {
    this.destroyer$.next();
    this.destroyer$.complete();
  }
}
