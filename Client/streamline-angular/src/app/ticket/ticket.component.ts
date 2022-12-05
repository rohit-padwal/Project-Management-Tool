import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from './service/ticket.service';
import { TicketDTO } from './shared/TicketDTO';
import { CommentService } from '../services/comment.service'; 
import { CommentsDTO } from '../shared/CommentDTO';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/shared/auth.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  id: string;
  ticket: TicketDTO;
  commentList: [CommentsDTO];
  addCommentForm: FormGroup;
  commentDTO: CommentsDTO;
  commentText: string;
  constructor(
    private ticketService: TicketService,
    private route: ActivatedRoute, private commentService: CommentService, private authService: AuthService) { 
      this.commentDTO = {
        commentId:'',
        ticketId:this.id,
        timestamp:new Date(),
        commentText:'',
        userName:this.authService.getUserName()
      };
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.ticketService.getTicketById(this.id).subscribe(res => {
      this.ticket = res;
      this.addCommentForm = new FormGroup({
        comment: new FormControl('', Validators.required)
      });
      this.commentService.getCommentsByTicketId(this.id).subscribe(res => {
        this.commentList = res;
        this.commentList = this.commentList.sort((a, b) => {
          return <any>new Date(a.timestamp) - <any>new Date(b.timestamp);
        });
      });
    });
    
  }

  submit() {
    this.commentDTO.commentText = this.addCommentForm.get('comment').value;
    this.commentDTO.timestamp = new Date();
    this.commentDTO.ticketId = this.id;
    this.commentDTO.userName = this.authService.getUserName();
    this.commentService.createComment(this.commentDTO).subscribe(res => {
      this.commentService.getCommentsByTicketId(this.id).subscribe(res => {
        this.commentList = res;
        this.addCommentForm.reset();
        this.commentList = this.commentList.sort((a, b) => {
          return <any>new Date(a.timestamp) - <any>new Date(b.timestamp);
        });
      });
    });
  }

  update(comment: CommentsDTO, val: any) {
    this.commentDTO.commentText = this.commentText;
    this.commentDTO.commentId = comment.commentId;
    this.commentDTO.timestamp = new Date();
    this.commentDTO.ticketId = this.id;
    this.commentDTO.userName = this.authService.getUserName();
    this.commentService.updateComment(this.commentDTO).subscribe(res => {
      this.commentDTO = res;
    });
  }
  delete(comment : CommentsDTO) {
    this.commentService.deleteComment(comment.commentId).subscribe(res => {
    });
  }
  change(val : any): any {
    this.commentText = val.currentTarget.value;
  }
}
