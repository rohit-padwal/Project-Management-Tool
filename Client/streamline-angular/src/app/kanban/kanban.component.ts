import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket/service/ticket.service';
import { TicketDTO } from '../ticket/shared/TicketDTO';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit {

  tickets: Array<TicketDTO> 
  toDoTickets: Array<TicketDTO>
  inProgressTickets: Array<TicketDTO>
  testTickets: Array<TicketDTO>
  closedTickets: Array<TicketDTO>


  constructor(private ticketService: TicketService) {
    
  }

  ngOnInit(): void {
    this.ticketService.getAllTickets().subscribe(res => {
      this.tickets=res;
      this.toDoTickets=this.tickets.filter(ticket =>ticket.status=="OPEN");
      this.inProgressTickets=this.tickets.filter(ticket =>ticket.status=="IN_PROGRESS");
      this.testTickets=this.tickets.filter(ticket =>ticket.status=="TEST");
      this.closedTickets=this.tickets.filter(ticket =>ticket.status=="COMPLETE");
    })
  }

  allowDrop(ev) {
    ev.preventDefault();
    }
    
    drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    }
    
    drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    }
  }