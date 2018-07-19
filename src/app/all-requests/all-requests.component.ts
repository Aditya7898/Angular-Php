import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-all-requests',
  templateUrl: './all-requests.component.html',
  styleUrls: ['./all-requests.component.css']
})
export class AllRequestsComponent implements OnInit {

  requests$: any;
  requests: any[] = [];

  constructor(private auth: AuthService) { }

  ngOnInit() {
      this.auth.allRequests().subscribe(res => {
          console.log(res);
      });
  }
}
