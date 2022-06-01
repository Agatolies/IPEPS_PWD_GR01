import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  @Input() list!: any[];
  @Input() label!: string;
  @Input() tooltip?: string;
  @Output() onChoose = new EventEmitter<any>();
  currentChoose?: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(item: any): void {
    this.currentChoose = item;
    this.onChoose.emit(this.currentChoose);
  }

}
