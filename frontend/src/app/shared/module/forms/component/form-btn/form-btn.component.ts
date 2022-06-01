import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-btn',
  templateUrl: './form-btn.component.html',
  styleUrls: ['./form-btn.component.scss']
})
export class FormBtnComponent implements OnInit {
  @Input() css?: string;
  @Input() icon!: string;
  @Input() label!: string;
  @Output() onClick = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
