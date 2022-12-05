import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentsDTO } from '../shared/CommentDTO';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  createComment(comment: CommentsDTO): Observable<CommentsDTO> {
    return this.httpClient.post<CommentsDTO>('http://localhost:8080/api/comment/createComment', comment);
  }

  deleteComment(commentId: string): Observable<void> {
    return this.httpClient.delete<void>('http://localhost:8080/api/comment/deleteComment/' + commentId);
  }

  updateComment(comment: CommentsDTO): Observable<CommentsDTO> {
    return this.httpClient.post<CommentsDTO>('http://localhost:8080/api/comment/updateComment', comment);
  }

  getCommentsByTicketId(ticketId: string): Observable<[CommentsDTO]> {
    return this.httpClient.get<[CommentsDTO]>('http://localhost:8080/api/ticket/getCommentsByTicket/' + ticketId);
  }
}
