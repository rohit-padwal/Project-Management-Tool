package com.uta.streamline.service;

import com.uta.streamline.dto.CommentDetails;
import com.uta.streamline.entities.Comment;
import com.uta.streamline.repository.CommentRepository;
import com.uta.streamline.repository.TicketRepository;
import com.uta.streamline.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@AllArgsConstructor
public class CommentServiceImpl {
    private CommentRepository commentRepository;
    private UserRepository userRepository;
    private TicketRepository ticketRepository;

    public CommentDetails createComment(CommentDetails commentDetails) {
        Comment comment = new Comment();
        comment.setCommentText(commentDetails.getCommentText());
        comment.setTicket(ticketRepository.findById(Long.parseLong(commentDetails.getTicketId())).get());
        comment.setTimestamp(commentDetails.getTimestamp());
        comment.setUser(userRepository.findByUserName(commentDetails.getUserName()).get());
        commentDetails.setCommentId(commentRepository.save(comment).getCommentId());
        return commentDetails;
    }

    public CommentDetails updateComment(CommentDetails commentDetails) {
        Comment comment = new Comment();
        comment.setCommentText(commentDetails.getCommentText());
        comment.setTicket(ticketRepository.findById(Long.parseLong(commentDetails.getTicketId())).get());
        comment.setTimestamp(commentDetails.getTimestamp());
        comment.setUser(userRepository.findByUserName(commentDetails.getUserName()).get());
        comment.setCommentId(commentDetails.getCommentId());
        commentRepository.save(comment);
        return commentDetails;
    }

    public void deleteComment(Long commentId) {
        commentRepository.deleteById(commentId);
    }
}
