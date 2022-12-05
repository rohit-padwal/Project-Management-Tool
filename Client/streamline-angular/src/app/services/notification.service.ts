import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationDTO } from '../shared/NotificationDTO';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private httpClient: HttpClient) { }

  getNotificationsByUsername(username: string): Observable<Array<NotificationDTO>> {
    return this.httpClient.get<Array<NotificationDTO>>('http://localhost:8080/api/notification/getByUsername/' + username);
  }

}
