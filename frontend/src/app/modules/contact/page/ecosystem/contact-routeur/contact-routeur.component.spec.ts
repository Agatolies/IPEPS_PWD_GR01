import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRouteurComponent } from './contact-routeur.component';

describe('ContactRouteurComponent', () => {
  let component: ContactRouteurComponent;
  let fixture: ComponentFixture<ContactRouteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactRouteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactRouteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
