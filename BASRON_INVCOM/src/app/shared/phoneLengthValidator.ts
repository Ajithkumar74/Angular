import { AbstractControl } from "@angular/forms";

export function phoneLengthValidator(control: AbstractControl) {
    const value = control.value;
    if (value && !/^\d{10}$/.test(value)) {
      return { phoneLength: true };
    }
    return null;
  }