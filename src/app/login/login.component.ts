import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

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
