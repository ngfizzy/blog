import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private router: Router) {}

  private isAuthenticated = true;

  get authState() {
    return this.isAuthenticated;
  }

  login(username: string, password: string) {
    if (username === 'fizzy' && password === 'yzzif') {
      this.isAuthenticated = true;

      return true;
    }

    return false;
  }

  logout() {
    this.isAuthenticated = false;

    this.router.navigate(['authors', 'login']);
  }
}
