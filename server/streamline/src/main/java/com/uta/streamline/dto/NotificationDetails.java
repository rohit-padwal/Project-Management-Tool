package com.uta.streamline.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NotificationDetails {
    private String notificationId;
    private String notificationText;
    private String notificationType;
    private Date createDate;
    private String userName;
}
