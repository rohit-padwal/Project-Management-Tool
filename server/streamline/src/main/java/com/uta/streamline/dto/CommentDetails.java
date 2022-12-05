package com.uta.streamline.dto;

import com.uta.streamline.entities.Project;
import com.uta.streamline.entities.Ticket;
import com.uta.streamline.entities.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommentDetails {
    private Long commentId;
    private Date timestamp;
    private String commentText;
    private String userName;
    private String ticketId;
}
