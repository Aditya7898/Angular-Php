import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Http } from '@angular/http';
import { LowerCasePipe } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  queryForm: FormGroup;

  constructor(private http: Http,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.queryForm = new FormGroup({
      'city': new FormControl(null, [Validators.required]),
      'bloodGroup': new FormControl(null, Validators.required),
    });

  }

  onSubmit() {
      console.log(this.queryForm.value);
      this.auth.search(this.queryForm.value);
  }
  reset() {
    this.queryForm.reset();
  }

}
