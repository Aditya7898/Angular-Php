import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  bloodGroups = [
    { value: 'A+' },
    { value: 'A-' },
    { value: 'B+' },
    { value: 'B-' },
    { value: 'O+' },
    { value: 'O-' },
    { value: 'AB+'},
    { value: 'AB-'}
  ];

  signupForm: FormGroup;

  constructor(private http: Http, private auth: AuthService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'fullName': new FormControl( null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'contact': new FormControl(null, [Validators.required, Validators.maxLength(12), Validators.minLength(10)]),
      'city': new FormControl(null, Validators.required),
      'bloodGroup': new FormControl(null, Validators.required),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
      console.log(this.signupForm.value);
      this.auth.signup(this.signupForm.value);
  }

  reset() {
      this.signupForm.reset();
  }
 }
