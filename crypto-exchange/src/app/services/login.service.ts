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
      const storedPassword = JSON.parse(existingUser).password;
      if (password === storedPassword) {
        alert('Username already exists.');
      } else {
        alert('Wrong password.');
      }
    } else {
      localStorage.setItem(username, JSON.stringify({ password }));
      console.log('New user added!');
    }
  }
}
