import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_shared/auth.service';
import { AlertifyService } from '../_shared/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 model: any = {};
  constructor(public authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in successfully');
    }, error => {
      this.alertify.error('Logged in failed');
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
    //const token = localStorage.getItem('token');
    //return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
    // return this.authService.loggedIn();
  }
}
