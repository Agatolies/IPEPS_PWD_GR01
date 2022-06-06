import { Component, OnInit } from '@angular/core';
import { BreadCrumbItem } from '@shared/model';
import { NavigationService } from '@shared/service';
import { DestroyableComponent } from '../destroyable/destroyable.component';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent extends DestroyableComponent implements OnInit {
  constructor(public navigation: NavigationService) {
    super();
  }

  ngOnInit(): void {
  }

  navigate(bread: BreadCrumbItem): void {
    this.navigation.navigate(bread.link);
  }
}
