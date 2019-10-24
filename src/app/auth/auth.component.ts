import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authStatus: boolean;
  constructor(private AuthService: AuthService, private router: Router) { 

  }

  ngOnInit() {
    this.authStatus = this.AuthService.isAuth;
  }
  onSignIn(){
    this.AuthService.signIn().then(() => {
      this.authStatus = this.AuthService.isAuth;
      this.router.navigate(['appareils']);
    });
  }

  onSignOut() {
    this.AuthService.signOut();
    this.authStatus = this.AuthService.isAuth;
  }

}
