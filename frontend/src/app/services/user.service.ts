import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { User } from '../model/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private serviceUrl = 'http://localhost/GreenITApplicationChallenge/backend/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get(this.serviceUrl)
      .pipe<User[]>(map((data: any) => data.users));
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.serviceUrl}/${user.id}`, user);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.serviceUrl}/add`, user);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.serviceUrl}/${id}`);
  }

  deleteUsers(users: User[]): Observable<User[]> {
    return forkJoin(
      users.map((user) =>
        this.http.delete<User>(`${this.serviceUrl}/${user.id}`)
      )
    );
  }
}
