package com.uta.streamline.repository;

import com.uta.streamline.entities.Project;
import com.uta.streamline.entities.Ticket;
import com.uta.streamline.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TicketRepository extends JpaRepository <Ticket, Long> {
    Optional<List<Ticket>> findTicketByAssignedTo(User user);
    Optional<List<Ticket>> findTicketByAssignee(User user);
}
