package com.uta.streamline.controller;

import com.uta.streamline.dto.NotificationDetails;
import com.uta.streamline.entities.Notification;
import com.uta.streamline.service.NotificationServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/notification")
@AllArgsConstructor
public class NotificationController {
    private NotificationServiceImpl notificationService;

    @GetMapping("/getByUsername/{username}")
    public List<NotificationDetails> getByUsername(@PathVariable String username) {
        return notificationService.getNotificationsByUser(username);
    }
}
