package com.uta.streamline.repository;

import com.uta.streamline.entities.Notification;
import com.uta.streamline.entities.User;
import com.uta.streamline.enums.NotificationType;
import org.aspectj.weaver.ast.Not;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {
    List<Notification> findByUser(User user);
    List<Notification> findByNotificationTypeAndUser(NotificationType notificationType, User user);
}
