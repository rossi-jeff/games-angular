import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordConfirmationValidator } from '../../lib/password-confirmation.validator';

type RegisterType = {
  UserName?: string | null;
  password?: string | null;
  confirmation?: string | null;
};

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css'],
})
export class RegisterDialogComponent {
  @Output() cancel = new EventEmitter();
  @Output() register = new EventEmitter<RegisterType>();

  cancelClicked = () => {
    this.cancel.emit();
  };

  registerForm = new FormGroup({
    UserName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmation: new FormControl('', [
      Validators.required,
      PasswordConfirmationValidator('password', 'confirmation'),
    ]),
  });

  get username() {
    return this.registerForm.get('UserName');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmation() {
    return this.registerForm.get('confirmation');
  }

  registerClicked = () => {
    if (this.registerForm.invalid) return;
    this.register.emit(this.registerForm.value);
  };
}
