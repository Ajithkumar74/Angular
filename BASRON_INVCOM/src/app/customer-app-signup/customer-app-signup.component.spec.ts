import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAppSignupComponent } from './customer-app-signup.component';

describe('CustomerAppSignupComponent', () => {
  let component: CustomerAppSignupComponent;
  let fixture: ComponentFixture<CustomerAppSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerAppSignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAppSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
