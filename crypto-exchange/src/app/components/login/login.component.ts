import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private router: Router, private loginServices: LoginService) {}

  login(): void {
    if (this.loginForm.valid) {
      if (
        this.loginServices.checkCredentials(
          this.username?.value,
          this.password?.value
        )
      ) {
        console.log('Succesful Login');
        this.loginServices.login(this.username?.value);
        this.router.navigate(['crypto-exchange']);
      } else {
        this.loginServices.createUser(
          this.username?.value,
          this.password?.value
        );
        console.log('Wrong password.');
      }
    } else {
      console.log('Wrong credentials.');
    }
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
