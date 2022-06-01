import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CardHeaderConfig, MenuAction} from '@shared/model';
import {isNil} from 'lodash';
import {NavigationService} from '@shared/service';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss']
})
export class CardHeaderComponent implements OnInit {
  @Input() config!: CardHeaderConfig;
  @Output() onActionClick = new EventEmitter<MenuAction>();

  constructor(public navigationService: NavigationService) {
  }

  ngOnInit(): void {
  }

  navigate(): void {
    if (!isNil(this.config.titleLink)) {
      this.navigationService.navigate(this.config.titleLink);

    }
  }
}
