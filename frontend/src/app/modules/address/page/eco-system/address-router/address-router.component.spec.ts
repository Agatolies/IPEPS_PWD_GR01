import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressRouterComponent } from './address-router.component';

describe('AddressRouterComponent', () => {
  let component: AddressRouterComponent;
  let fixture: ComponentFixture<AddressRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressRouterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
