import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private router: Router) {}

  checkCredentials(username: string, password: string): boolean {
    const existingUser = localStorage.getItem(username);
    if (existingUser) {
      const storedPassword = JSON.parse(existingUser).password;
      return password === storedPassword;
    }
    return false;
  }

  createUser(username: string, password: string): void {
    const existingUser = localStorage.getItem(username);
    if (existingUser) {
      alert('Wrong password.');

      this.router.navigate(['']);
    } else {
      localStorage.setItem(username, JSON.stringify({ password }));
      console.log('New User added!');
    }
  }
}
