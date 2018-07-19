import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Http } from '@angular/http';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

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

  requestForm: FormGroup;

  constructor(private http: Http, private auth: AuthService) { }

  ngOnInit() {
    this.requestForm = new FormGroup({
      'Pname': new FormControl( null, Validators.required),
      'Pbloodgroup': new FormControl(null, [Validators.required]),
      'Pcity': new FormControl(null, [Validators.required]),
      'Paddress': new FormControl(null, Validators.required),
      'Pdoctor': new FormControl(null, Validators.required),
      'Cname': new FormControl(null, [Validators.required]),
      'Cemail': new FormControl(null, [Validators.required]),
      'Ccontact': new FormControl(null, [Validators.required]),
      'Cdate': new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
      console.log(this.requestForm.value);
      this.auth.sendRequest(this.requestForm.value);
  }

  reset() {
      this.requestForm.reset();
  }

}
