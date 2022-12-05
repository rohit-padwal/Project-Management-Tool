package com.uta.streamline.service;

import com.uta.streamline.dto.NotificationDetails;
import com.uta.streamline.entities.*;
import com.uta.streamline.enums.NotificationType;
import com.uta.streamline.enums.Status;
import com.uta.streamline.repository.NotificationRepository;
import com.uta.streamline.repository.TicketRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.concurrent.TimeUnit;

@Service
@AllArgsConstructor
public class NotificationServiceImpl {
    private NotificationRepository notificationRepository;
    private TicketRepository ticketRepository;
    private UserServiceImpl userService;

    public void createNotification(NotificationType notificationType, String text, User user, Date date) {
        List<Notification> notificationList = notificationRepository.findByNotificationTypeAndUser(notificationType, user);
        if (!notificationExists(notificationList, text)) {
            Notification notification = new Notification();
            notification.setNotificationType(notificationType);
            notification.setCreateDate(date);
            notification.setNotificationText(text);
            notification.setUser(user);
            notificationRepository.save(notification);
        }
    }

    private boolean notificationExists(List<Notification> notificationList, String text) {
        for (Notification notification : notificationList) {
            if (notification.getNotificationText().equalsIgnoreCase(text)) {
                return true;
            }
        }
        return false;
    }

    public List<NotificationDetails> getNotificationsByUser(String userName) {
        User user = userService.findByUsername(userName);
        List<Ticket> tickets = ticketRepository.findTicketByAssignedTo(user).get();
        for (Ticket ticket : tickets) {
            createNewTicketNotification(ticket, user);
            createApproachingDeadlineNotification(ticket, user);
            createNewCommentNotification(ticket, user);
        }
        List<NotificationDetails> notificationList = mapNotificationToDTO(notificationRepository.findByUser(user));
        return notificationList;
    }

    private List<NotificationDetails> mapNotificationToDTO(List<Notification> notificationList) {
        List<NotificationDetails> notificationDetailsList = new ArrayList<>();
        for (Notification notification : notificationList) {
            NotificationDetails notificationDetails = new NotificationDetails();
            notificationDetails.setNotificationId(notification.getNotificationId().toString());
            notificationDetails.setNotificationText(notification.getNotificationText());
            notificationDetails.setNotificationType(notification.getNotificationType().name());
            notificationDetails.setCreateDate(notification.getCreateDate());
            notificationDetails.setUserName(notification.getUser().getUserName());
            notificationDetailsList.add(notificationDetails);
        }
        return notificationDetailsList;
    }

    private void createNewCommentNotification(Ticket ticket, User user) {
        List<Comment> comments = ticketRepository.getById(ticket.getTicketId()).getComments();
        for (Comment comment : comments) {
            if (!comment.getUser().equals(user)) {
                String text = "A new Comment has been added to a ticket you are working on by " + comment.getUser().getUserName() + " : Ticket "+
                        ticket.getTicketId() + " and with status " + ticket.getStatus();
                createNotification(NotificationType.COMMENT, text, user, comment.getTimestamp());
            }
        }
    }

    private void createNewTicketNotification(Ticket ticket, User user) {
        SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy", Locale.ENGLISH);
        String date = sdf.format(ticket.getDueDate());
        String text = "A new Ticket has been assigned to you that is due on " + date + " : Ticket "+
                ticket.getTicketId() + " and with status " + ticket.getStatus();
        createNotification(NotificationType.ASSIGNED, text, user, ticket.getCreateDate());
    }

    private void createApproachingDeadlineNotification(Ticket ticket, User user) {
        SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy", Locale.ENGLISH);
        String date = sdf.format(ticket.getDueDate());
        if ((ticket.getStatus().equals(Status.OPEN) || ticket.getStatus().equals(Status.IN_PROGRESS) ||
                ticket.getStatus().equals(Status.TEST)) && approachingDeadline(ticket)) {
            String text = "Ticket due on " + date + " : Ticket "+
                    ticket.getTicketId() + " and with status " + ticket.getStatus();
            createNotification(NotificationType.DEADLINE, text, user, new Date());
        }
    }

    private boolean approachingDeadline(Ticket ticket) {
        Date dueDate = ticket.getDueDate();
        Date date = new Date();
        long diffInMilli = Math.abs(date.getTime() - dueDate.getTime());
        long diff = TimeUnit.DAYS.convert(diffInMilli, TimeUnit.MILLISECONDS);
        if (diff <= 1) {
            return true;
        }
        return false;
    }
}
