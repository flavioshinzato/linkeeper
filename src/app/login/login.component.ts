import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, Params } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Boolean = true
  register: Boolean = false
  
  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmitLogin(f) {
    console.log(f.value.email , f.value.password);
    this.authService.doLogin(f.value.email, f.value.password)
    .then(res => {
      this.router.navigate(['/home'])
    }, err => {
      console.log(err);
    })
  }

  onSubmitRegister(f) {
    console.log(f.value.email , f.value.password);
    this.authService.doRegister(f.value.email , f.value.password)
    .then(res => {
      this.router.navigate(['/']);
    }, err => {
      console.log(err);
    })
  }
  showRegisterForm() {
    this.login = false
    this.register = true
  }

  showLoginForm() {
    this.login = true
    this.register = false
  }
}
