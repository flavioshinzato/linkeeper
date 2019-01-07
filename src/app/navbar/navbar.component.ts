import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService,private router: Router) {}

  ngOnInit() {
  }

  logout() {
    this.authService.doLogout().then(() => {
      this.router.navigate(['/login'])
    })
  }
}
