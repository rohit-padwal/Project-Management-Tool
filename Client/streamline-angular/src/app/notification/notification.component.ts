import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/shared/auth.service';
import { NotificationService } from '../services/notification.service';
import { NotificationDTO } from '../shared/NotificationDTO';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications: Array<NotificationDTO>;

  constructor(private notificationService: NotificationService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.notificationService.getNotificationsByUsername(this.authService.getUserName()).subscribe(res => {
        this.notifications = res;
        this.notifications = this.notifications.sort((b, a) => {
          return <any>new Date(a.createDate) - <any>new Date(b.createDate);
        });
    })
  }

}
