import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent {
  @Input() title: string = 'Papa\'s Travel';
  @Input() subtitle: string = '';
  @Input() cheminLogo: string ='../assets/images/logo200x125.png';
  @Input() badgeContent?: number | null;

  constructor() { }

  ngOnInit(): void {
  }
}
