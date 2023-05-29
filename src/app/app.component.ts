import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { UserSessionStorage, blankSession } from '../lib/user-session.storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'games-angular';
  session: UserSessionStorage = new UserSessionStorage();

  constructor(private api: ApiService) {}

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
    const { UserName, password } = ev;
    this.api
      .post({ path: 'api/auth/login', body: { UserName, password } })
      .subscribe((result: any) => {
        const { UserName, Token } = result;
        this.session.data = {
          UserName,
          Token,
          SignedIn: true,
        };
        console.log({ UserName, Token });
      });
    console.log(ev);
    this.hideSignIn();
  };

  register = (ev: any) => {
    const { UserName, password, confirmation } = ev;
    if (password == confirmation) {
      this.api
        .post({ path: 'api/auth/register', body: { UserName, password } })
        .subscribe((result) => {
          const user = result;
          console.log({ user });
          this.showSignIn();
        });
    }
    this.hideRegister();
  };

  signOut = () => {
    this.session.data = blankSession;
  };

  toggleSidePanel = () => {
    const sidePanel = document.getElementById('side-panel');
    if (sidePanel) sidePanel.classList.toggle('open');
  };
}
