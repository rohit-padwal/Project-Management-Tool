import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from '../shared/UserDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<Array<UserDTO>> {
    return this.httpClient.get<Array<UserDTO>>('http://localhost:8080/api/user/getAllUsers');
  }

  getUserByUserName(username: string): Observable<UserDTO> {
    return this.httpClient.get<UserDTO>('http://localhost:8080/api/user/getByUsername/' + username);
  }
}
