import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ContextMenuConfig, ContextMenuItem } from '@shared/module/menu/component/context-menu/context-menu.config';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent implements OnInit {
  @Input() config!: ContextMenuConfig;
  @Output() onContextMenuItemClick: EventEmitter<ContextMenuItem> = new EventEmitter<ContextMenuItem>();

  onContextMenuClick(event: MouseEvent, data: ContextMenuItem): any {
    this.onContextMenuItemClick.emit(data);
  }

  ngOnInit(): void {
  }

  @HostListener('document:click')
  documentClick(): void {
    this.config.show = false;
  }
}
