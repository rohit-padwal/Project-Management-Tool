package com.uta.streamline.entities;

import com.uta.streamline.enums.NotificationType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long notificationId;
    private String notificationText;
    @Enumerated(EnumType.STRING)
    private NotificationType notificationType;
    private Date createDate;
    @ManyToOne
    @JoinColumn (name = "user_id")
    private User user;
}
