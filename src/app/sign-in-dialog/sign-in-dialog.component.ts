import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

type SignInType = {
  UserName?: string | null;
  password?: string | null;
};

@Component({
  selector: 'app-sign-in-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrls: ['./sign-in-dialog.component.css'],
})
export class SignInDialogComponent {
  @Output() cancel = new EventEmitter();
  @Output() signIn = new EventEmitter<SignInType>();

  cancelClicked = () => {
    this.cancel.emit();
  };

  signInForm = new FormGroup({
    UserName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  get username() {
    return this.signInForm.get('UserName');
  }

  get password() {
    return this.signInForm.get('password');
  }

  signInClicked = () => {
    if (this.signInForm.invalid) return;
    this.signIn.emit(this.signInForm.value);
  };
}
