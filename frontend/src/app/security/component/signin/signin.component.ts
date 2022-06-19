import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from '@security/service/auth.service';
import {SigninPayload} from '@security/model';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IS_DEBUG} from "@shared/model";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  @Input() error?: string | null;

  @Output() submitEM = new EventEmitter();

  signinForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public auth: AuthService
  ) {  }

  ngOnInit(): void {
    let defaultUsername = '';
    let defaultPassword = '';

    if (IS_DEBUG) {
      defaultUsername = 'anne';
      defaultPassword = 'P@ssword!';
    }

    this.signinForm = this.formBuilder.group({
      username: [defaultUsername, Validators.required],
      password: [defaultPassword, Validators.required],
    })
  }

  submit() {
    if (this.signinForm.valid) {
      this.auth.signin(this.signinForm.value).subscribe();
    }
  }
}
