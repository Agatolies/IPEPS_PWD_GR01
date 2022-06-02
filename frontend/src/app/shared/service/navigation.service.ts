import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BreadCrumbItem, Entity, MENU_ACTION, MenuAction, MenuActionType } from '@shared/model';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { BreadcrumbHelper } from '@shared/helper';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  currentMenuAction$: BehaviorSubject<MenuAction | undefined> = new BehaviorSubject<MenuAction | undefined>(undefined);
  breadCrumb$: BehaviorSubject<BreadCrumbItem[]> = new BehaviorSubject<BreadCrumbItem[]>([]);
  destroyer$ = new Subject<void>();

  constructor(public router: Router) {
    router.events.pipe(
      takeUntil(this.destroyer$),
      filter((event: any) => event instanceof NavigationEnd),
      map(event => event as NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const found = MENU_ACTION.ALL.find((menuAction: MenuAction) => menuAction.link === event.url);
        if (found) {
          // Stop listen on router change (takeUntil(...))
          this.destroyer$.next();
          this.destroyer$.complete();
          this.currentMenuAction$.next(found);
        }
      });
  }

  setMenuAction(menuAction: MenuAction): void {
    this.currentMenuAction$.next(menuAction);
    this.navigate(menuAction.link!);
  }

  navigate(path: string): void {
    this.router.navigate([path]).then();
  }

  navigateToUnsecure(): void {
    this.setMenuAction(MENU_ACTION.ACCOUNT_SIGNIN);
  }

  navigateToSecure(): void {
    this.navigate('/dashboard');
  }

  setBreadCrumb(entity: Entity, currentAction: MenuActionType): void {
    this.breadCrumb$.next(BreadcrumbHelper.getBreads(entity, currentAction));
  }
}
