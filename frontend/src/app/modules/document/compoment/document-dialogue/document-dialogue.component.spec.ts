import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentDialogueComponent } from './document-dialogue.component';

describe('DocumentDialogueComponent', () => {
  let component: DocumentDialogueComponent;
  let fixture: ComponentFixture<DocumentDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentDialogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
