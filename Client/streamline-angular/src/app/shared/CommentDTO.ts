import { TicketDTO } from "../ticket/shared/TicketDTO";
import { UserDTO } from "./UserDTO";

export interface CommentsDTO {
    commentId: string,
    timestamp: Date,
    commentText: string,
    userName: string,
    ticketId: string,
}