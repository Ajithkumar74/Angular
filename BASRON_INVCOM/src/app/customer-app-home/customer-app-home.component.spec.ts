import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAppHomeComponent } from './customer-app-home.component';

describe('CustomerAppHomeComponent', () => {
  let component: CustomerAppHomeComponent;
  let fixture: ComponentFixture<CustomerAppHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerAppHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAppHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
