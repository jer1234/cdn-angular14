import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient){}

  updateUser(user: User) {
    return this._http.put<User>(`${environment.apiUrl}/user/${user.username}`, user, {observe: 'response'});
  }
  // getUserById(userId: any): User {
  //   throw new Error('Method not implemented.');
  // }
  deleteUser(username: User) {
    return this._http.delete(`${environment.apiUrl}/user/${username}`, {observe: 'response'});
  }

  getUsers(){
    return this._http.get(`${environment.apiUrl}/user`, {observe: 'response'});
  }

  addUser(user: User) {
    return this._http.post<User>(`${environment.apiUrl}/user`, user, {observe: 'response'});
  }


}
