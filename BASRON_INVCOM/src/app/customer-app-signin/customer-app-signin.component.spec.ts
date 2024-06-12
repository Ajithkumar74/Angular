import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAppSigninComponent } from './customer-app-signin.component';

describe('CustomerAppSigninComponent', () => {
  let component: CustomerAppSigninComponent;
  let fixture: ComponentFixture<CustomerAppSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerAppSigninComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAppSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
