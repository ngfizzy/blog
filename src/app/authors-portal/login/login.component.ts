import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) { }

  username: string;
  password: string;

  isActive: boolean;

  ngOnInit(): void { }

  login() {
    const isLoggedIn = this.auth.login(this.username, this.password);

    if (isLoggedIn) {
      this.router.navigate(['authors', 'dashboard']);
    }
  }

  toggleActiveState() {
    this.isActive = !this.isActive;
  }
}
