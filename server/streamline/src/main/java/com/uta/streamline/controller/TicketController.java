package com.uta.streamline.controller;

import com.uta.streamline.dto.CommentDetails;
import com.uta.streamline.dto.TicketDetails;
import com.uta.streamline.entities.Comment;
import com.uta.streamline.service.TicketServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ticket")
@AllArgsConstructor
public class TicketController {
    private TicketServiceImpl ticketService;

    @PostMapping("/createTicket")
    public TicketDetails createTicket(@RequestBody TicketDetails ticketDetails) {
        return ticketService.create(ticketDetails);
    }

    @PostMapping("/updateTicket/{ticketId}")
    public TicketDetails createOrUpdateTicket(@PathVariable String ticketId, @RequestBody TicketDetails ticketDetails) {
        return ticketService.update(Long.parseLong(ticketId), ticketDetails);
    }

    @DeleteMapping("/deleteTicket/{ticketId}")
    public void deleteTicket(@PathVariable String ticketId) {
        ticketService.deleteTicket(Long.parseLong(ticketId));
    }


    @GetMapping("/getAllTickets/")
    public List<TicketDetails> getAllTickets() {
        return ticketService.getAllTickets();
    }

    @GetMapping("/getTicketDetails/{ticketId}")
    public TicketDetails getTicketDetails(@PathVariable String ticketId) {
        return ticketService.getTicketByTicketId(Long.parseLong(ticketId));
    }

    @GetMapping("/getTicketsByAssignee/{userId}")
    public List<TicketDetails> getTicketsByAssignee(@PathVariable String userId) {
        return ticketService.getTicketsByAssignee(Long.parseLong(userId));
    }

    @GetMapping("/getTicketsByAssignedTo/{userId}")
    public List<TicketDetails> getTicketsByAssignedTo(@PathVariable String userId) {
        return ticketService.getTicketsByAssignedTo(Long.parseLong(userId));
    }

    @GetMapping("/getCommentsByTicket/{ticketId}")
    public List<CommentDetails> getCommentsByTicket(@PathVariable String ticketId) {
        return ticketService.getCommentsByTicket(Long.parseLong(ticketId));
    }

    @GetMapping("/getTicketsByProject/{projectId}")
    public List<TicketDetails> getTicketsByProject(@PathVariable String projectId) {
        return ticketService.getTicketsByProjectId(Long.parseLong(projectId));
    }
}
