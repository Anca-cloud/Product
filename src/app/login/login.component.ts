import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from './../hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'anca'
  password = 'anca'
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(private router: Router,  private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  // console.log(this.username);
    //if(this.username==="anca" && this.password === 'anca') {
      handleLogin() {
        // console.log(this.username);
        //if(this.username==="in28minutes" && this.password === 'dummy') {
        if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
          //Redirect to Welcome Page
          this.router.navigate(['welcome', this.username])
          this.invalidLogin = false
        } else {
          this.invalidLogin = true
        }
      }
}