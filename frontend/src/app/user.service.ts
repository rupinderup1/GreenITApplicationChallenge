import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInformation } from './model/userinformation';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  //Http Client get method
  public getUsers(): Observable<UserInformation> {
    const url = 'http://localhost/GreenITApplicationChallenge/backend/users/';
    return this.http.get<UserInformation>(url);
  }
}
