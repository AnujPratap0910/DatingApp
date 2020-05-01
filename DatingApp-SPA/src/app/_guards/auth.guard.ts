import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_shared/auth.service';
import { AlertifyService } from '../_shared/alertify.service';

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertify: AlertifyService
  ) {}

  canActivate(): boolean {
    if (this.authService.loggedIn() ) {
      return true;
    }

    this.alertify.error('You shall not pass!!');
    this.router.navigate(['home']);
    return false;
  }
}
