import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'games-angular';

  showSignIn = () => {
    this.hideRegister();
    const overlay = document.getElementById('dialog-screen-overlay');
    if (overlay) overlay.style.display = 'block';
    const dialog = document.getElementById('sign-in-dialog');
    if (dialog) dialog.style.display = 'block';
  };

  hideSignIn = () => {
    const dialog = document.getElementById('sign-in-dialog');
    if (dialog) dialog.style.display = 'none';
    const overlay = document.getElementById('dialog-screen-overlay');
    if (overlay) overlay.style.display = 'none';
  };

  showRegister = () => {
    this.hideSignIn();
    const overlay = document.getElementById('dialog-screen-overlay');
    if (overlay) overlay.style.display = 'block';
    const dialog = document.getElementById('register-dialog');
    if (dialog) dialog.style.display = 'block';
  };

  hideRegister = () => {
    const dialog = document.getElementById('register-dialog');
    if (dialog) dialog.style.display = 'none';
    const overlay = document.getElementById('dialog-screen-overlay');
    if (overlay) overlay.style.display = 'none';
  };

  cancel = () => {
    this.hideRegister();
    this.hideSignIn();
  };

  signIn = (ev: any) => {
    console.log(ev);
    this.hideSignIn();
  };

  register = (ev: any) => {
    console.log(ev);
    this.hideRegister();
  };
}
