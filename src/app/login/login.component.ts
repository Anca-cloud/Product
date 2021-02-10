import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from './../hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'sysadmin'
  password = 'sysadmin'
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(private router: Router,  private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }


      handleLogin() {
        
        if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
          //Redirect to Welcome Page
          this.router.navigate(['welcome', this.username])
          this.invalidLogin = false
        } else {
          this.invalidLogin = true
        }
      }
}