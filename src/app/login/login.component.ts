import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'admin';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router, 
    private: HardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
    console.log(this.password);
    if(this.username==='admin' && this.password === 'dummy'){
      this.invalidLogin = false
    }
    else{
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = true;
    }
  }
}
