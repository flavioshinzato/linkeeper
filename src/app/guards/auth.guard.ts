import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service'


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean {
    return this.verifyAuthenticationStatus()
  }
  
  canLoad(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean {
    return this.verifyAuthenticationStatus()
  }

  private verifyAuthenticationStatus() {
    if (localStorage.getItem('uid') != undefined) {
        return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}