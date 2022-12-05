package com.uta.streamline.dto;

import com.uta.streamline.entities.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TicketDetails {
    private long ticketId;
    private Date createDate;
    private int estimatedTime;
    private int actualTime;
    private String status;
    private Date dueDate;
    private String assignee;
    private String assignedTo;
    private String summary;
    private String description;
    private String priority;
    private String projectName;
}
