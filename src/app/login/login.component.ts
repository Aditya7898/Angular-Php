import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetails: {email: string, password: string} = {
       email: '',
       password: ''
  };

  constructor(private auth: AuthService) { }

  ngOnInit() {

  }

  login() {
    this.auth.login(this.loginDetails.email, this.loginDetails.password);
    console.log(this.loginDetails.email, this.loginDetails.password);
  }
}
