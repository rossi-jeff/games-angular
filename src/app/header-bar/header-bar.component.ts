import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserSessionStorage } from '../../lib/user-session.storage';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css'],
})
export class HeaderBarComponent {
  @Input() session!: UserSessionStorage;
  @Output() signOut = new EventEmitter();
  @Output() showSignIn = new EventEmitter();
  @Output() showRegister = new EventEmitter();

  signOutClicked = () => {
    this.signOut.emit();
  };

  showSignInClicked = () => {
    this.showSignIn.emit();
  };

  showRegisterClicked = () => {
    this.showRegister.emit();
  };
}
