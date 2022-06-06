import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressMenuComponent } from './address-menu.component';

describe('AddressMenuComponent', () => {
  let component: AddressMenuComponent;
  let fixture: ComponentFixture<AddressMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
