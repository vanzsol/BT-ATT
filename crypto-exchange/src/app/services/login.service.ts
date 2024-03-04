import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  private readonly LOGGED_IN_KEY = 'isLoggedIn';

  login(username: string) {
    localStorage.setItem(this.LOGGED_IN_KEY, 'true');
    console.log(`User ${username} logged in.`);
    localStorage.setItem('username', username);
  }

  logout() {
    localStorage.removeItem(this.LOGGED_IN_KEY);
    console.log('User logged out.');
  }

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

  isAuthenticated(): boolean {
    return localStorage.getItem(this.LOGGED_IN_KEY) === 'true';
  }
}
