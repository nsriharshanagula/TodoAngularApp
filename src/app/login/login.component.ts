import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit() {
  }

  handleLogin(){
    console.log(this.password);
    if(this.username==='admin' && this.password === 'dummy'){
      this.invalidLogin = false
    }
    else{
      this.invalidLogin = true;
    }
  }
}
