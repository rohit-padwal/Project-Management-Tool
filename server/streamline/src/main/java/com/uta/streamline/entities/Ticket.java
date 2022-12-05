package com.uta.streamline.entities;

import com.uta.streamline.enums.Priority;
import com.uta.streamline.enums.Status;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ticketId;
    private Date createDate;
    private Integer estimatedTime;
    private Integer actualTime;
    @Enumerated (EnumType.STRING)
    private Status status;
    private Date dueDate;
    @OneToOne
    @JoinColumn (name = "assignee_userid")
    private User assignee;
    @OneToOne
    @JoinColumn (name = "assigned_to_userid")
    private User assignedTo;
    private String summary;
    private String description;
    @Enumerated (EnumType.STRING)
    private Priority priority;
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "project_id", nullable = false)
    private Project project;
    @OneToMany(mappedBy = "ticket", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private List<Comment> comments;
}
