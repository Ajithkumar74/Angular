import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAppLoginComponent } from './customer-app-login.component';

describe('CustomerAppLoginComponent', () => {
  let component: CustomerAppLoginComponent;
  let fixture: ComponentFixture<CustomerAppLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerAppLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAppLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
