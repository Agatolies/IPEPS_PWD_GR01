import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressDeletedComponent } from './address-deleted.component';

describe('AddressDeletedComponent', () => {
  let component: AddressDeletedComponent;
  let fixture: ComponentFixture<AddressDeletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressDeletedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressDeletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
