import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as d3Scale from 'd3';
import * as d3Shape from 'd3';
import * as d3Array from 'd3';
import * as d3Axis from 'd3';
import { AuthService } from 'src/app/auth/shared/auth.service';
import { DatavizService } from 'src/app/services/dataviz.service';
import { UserService } from 'src/app/services/user.service';
import { TicketService } from 'src/app/ticket/service/ticket.service';
import { TicketDTO } from 'src/app/ticket/shared/TicketDTO';

@Component({
  selector: 'app-dataviz',
  templateUrl: './dataviz.component.html',
  styleUrls: ['./dataviz.component.css']
})
export class DatavizComponent implements OnInit {

  private tickets: any;
  private ticketMapPieChart = [
    {"status": "OPEN", "value": ""},
    {"status": "IN_PROGRESS", "value": ""},
    {"status": "TEST", "value": ""},
    {"status": "COMPLETE", "value": ""},
  ];

  private userToTicketsMap: any = [
    {"user": "", "tickets": ""}
  ];
  
  private toDoTickets: Array<TicketDTO>;
  private inProgressTickets: Array<TicketDTO>;
  private testTickets: Array<TicketDTO>;
  private doneTickets: Array<TicketDTO>;

  constructor(private userService: UserService,
              private authService: AuthService,
              private ticketService: TicketService,
              private dataVizService: DatavizService) {
  }

  ngOnInit(): void {

    this.userService.getUserByUserName(this.authService.getUserName()).subscribe(res => {
      this.ticketService.getTicketsByAssignedTo(res.userId).subscribe(val => {
        this.tickets = val;

        this.toDoTickets=this.tickets.filter(ticket =>ticket.status=="OPEN");
        this.inProgressTickets=this.tickets.filter(ticket =>ticket.status=="IN_PROGRESS");
        this.testTickets=this.tickets.filter(ticket =>ticket.status=="TEST");
        this.doneTickets=this.tickets.filter(ticket =>ticket.status=="COMPLETE");

        this.ticketMapPieChart[0].value = this.toDoTickets.length.toString();
        this.ticketMapPieChart[1].value = this.inProgressTickets.length.toString();
        this.ticketMapPieChart[2].value = this.testTickets.length.toString();
        this.ticketMapPieChart[3].value = this.doneTickets.length.toString();

        this.dataVizService.createSvgForPieChart();
        this.dataVizService.createColorsForPieChart(this.ticketMapPieChart);
        this.dataVizService.drawPieChart(this.ticketMapPieChart);
      })
    });

  }


}
