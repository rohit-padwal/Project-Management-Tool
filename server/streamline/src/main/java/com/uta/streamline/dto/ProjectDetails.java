package com.uta.streamline.dto;

import com.uta.streamline.entities.Ticket;
import com.uta.streamline.entities.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProjectDetails {
    private Long projectId;
    private String projectName;
    private List<User> users;
    private  List<Ticket> tickets;
}
