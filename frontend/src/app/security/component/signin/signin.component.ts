import {Component, OnInit} from '@angular/core';
import {AuthService} from '@security/service/auth.service';
import {SigninPayload} from '@security/model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(public auth: AuthService) {
  }

  ngOnInit(): void {
  }

  signInPascal() {
    const payload: SigninPayload = {
      username: 'captain',
      password: 'P@ssword'
    };

    this.auth.signin(payload).subscribe();
  }

  signInLaure() {
    const payload: SigninPayload = {
      username: 'laure',
      password: 'T0psecret!'
    };

    this.auth.signin(payload).subscribe();
  }

  signInAnne() {
    const payload: SigninPayload = {
      username: 'anne',
      password: 'P@ssword'
    };

    this.auth.signin(payload).subscribe();
  }
}
