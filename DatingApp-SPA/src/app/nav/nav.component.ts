import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_shared/auth.service';
import { AlertifyService } from '../_shared/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 model: any = {};
  constructor(public authService: AuthService, private alertify: AlertifyService,
     private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in successfully');
    }, error => {
      this.alertify.error('Logged in failed');
    }, () => {
        this.router.navigate(['/members']);
    });
  }
  
  loggedIn() {
    return this.authService.loggedIn();
    // const token = localStorage.getItem('token');
    // return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
    // return this.authService.loggedIn();
    this.router.navigate(['/home']);
  }
}
