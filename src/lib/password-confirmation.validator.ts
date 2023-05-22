import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function PasswordConfirmationValidator(
  password: string,
  confirmation: string
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const passwordCtrl = control.get(password);
    const confirmationCtrl = control.get(confirmation);
    return passwordCtrl &&
      confirmationCtrl &&
      passwordCtrl.value !== confirmationCtrl.value
      ? { misMatch: true }
      : null;
  };
}
