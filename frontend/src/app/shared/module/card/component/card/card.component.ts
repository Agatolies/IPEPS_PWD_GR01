import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardConfig, MenuAction } from '@shared/model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() config?: CardConfig;
  @Output() onActionClick = new EventEmitter<MenuAction>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
