import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumberComponent } from './phone-number.component';

describe('PhoneNumberComponent', () => {
  let component: PhoneNumberComponent;
  let fixture: ComponentFixture<PhoneNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
