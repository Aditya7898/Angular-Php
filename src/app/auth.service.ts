import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  signup(userData) {
    this.http.post('http://localhost/phpapi/insert.php', userData).subscribe(res => {
      console.log(res);
    });
  }

  search(queryData) {
    // tslint:disable-next-line:max-line-length
    return this.http.post('http://localhost/phpapi/selectone.php/', {'bloodGroup': queryData.bloodGroup, 'city': queryData.city}).subscribe(res => {
      console.log(res);
    });

  }
  sendRequest(requestData) {
        this.http.post('http://localhost/phpapi/request.php', requestData).subscribe(res => {
           console.log(res);
        });
  }

  allRequests() {
    return  this.http.get('http://localhost/phpapi/select.php/')
      .pipe(map((response: any) => JSON.parse(JSON.stringify(response))));
  }

  login(email, password) {
    return this.http.post('http://localhost/phpapi/login.php', email, password).subscribe(response => {
      console.log(response);
    });
  }
}
