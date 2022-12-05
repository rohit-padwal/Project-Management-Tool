package com.uta.streamline.controller;

import com.uta.streamline.dto.CommentDetails;
import com.uta.streamline.dto.ProjectDetails;
import com.uta.streamline.entities.Project;
import com.uta.streamline.service.CommentServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comment")
@AllArgsConstructor
public class CommentController {
    private final CommentServiceImpl commentService;

    @PostMapping("/updateComment")
    public CommentDetails updateComment(@RequestBody CommentDetails commentDetails) {
        return commentService.updateComment(commentDetails);
    }

    @PostMapping("/createComment")
    public CommentDetails createComment(@RequestBody CommentDetails commentDetails) {
        return commentService.createComment(commentDetails);
    }

    @DeleteMapping("/deleteComment/{commentId}")
    public void deleteComment(@PathVariable String commentId) {
        commentService.deleteComment(Long.parseLong(commentId));
    }
}
