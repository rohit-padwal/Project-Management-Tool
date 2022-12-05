import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/shared/auth.service';
import { ProjectComponent } from 'src/app/project/project.component';
import { ProjectService } from 'src/app/services/project.service';
import { UserService } from 'src/app/services/user.service';
import { ProjectDTO } from 'src/app/shared/ProjectDTO';
import { UserDTO } from 'src/app/shared/UserDTO';
import { TicketService } from '../service/ticket.service';
import { TicketDTO } from '../shared/TicketDTO';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  users: Array<UserDTO>;
  projects: Array<ProjectDTO>;
  editTicketForm: FormGroup;
  createEditTicketPayload: TicketDTO;
  priorityValues = ['HIGH','MEDIUM','LOW'];
  statusValues = ['OPEN','IN_PROGRESS','TEST','COMPLETE'];
  assignedToUsers = [];
  projectValues = [];
  currentUser = [];
  selectedAssignee = '';
  selectedAssignedTo = '';
  selectedProject = '';
  id: string;
  ticket: TicketDTO;
  constructor(private ticketService: TicketService,
    private userService: UserService,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) { 
    this.createEditTicketPayload = {
      ticketId: '',
      summary: '',
      assignedTo: '',
      assignee: '',
      createDate: new Date,
      estimatedTime: 0,
      actualTime: 0,
      description: '',
      dueDate: new Date,
      priority: '',
      status: '',
      projectName: ''
    };
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.ticketService.getTicketById(this.id).subscribe(res => {
      this.ticket = res;
      let cdate = new Date(this.ticket.createDate);
      let ddate = new Date(this.ticket.dueDate);
      this.editTicketForm = new FormGroup({
        summary: new FormControl(this.ticket.summary, Validators.required),
        projectName: new FormControl(this.ticket.projectName, Validators.required),
        assignee: new FormControl(this.ticket.assignee, Validators.required),
        assignedTo: new FormControl(this.ticket.assignedTo, Validators.required),
        status: new FormControl(this.ticket.status, Validators.required),
        priority: new FormControl(this.ticket.priority, Validators.required),
        createDate: new FormControl(cdate.toISOString().split("T")[0], Validators.required),
        dueDate: new FormControl(ddate.toISOString().split("T")[0], Validators.required),
        estimatedTime: new FormControl(this.ticket.estimatedTime, Validators.required),
        actualTime: new FormControl(this.ticket.actualTime, Validators.required),
        attachment: new FormControl('', Validators.required),
        description: new FormControl(this.ticket.description, Validators.required)
      });
      this.selectedAssignedTo = this.ticket.assignedTo;
      this.selectedProject = this.ticket.projectName;
      this.currentUser.push(this.ticket.assignee);
      this.selectedAssignee = this.ticket.assignee;

      this.userService.getAllUsers().subscribe(res => {
        this.users = res;
        this.users.forEach(user => {
          this.assignedToUsers.push(user.userName);
          

          this.projectService.getAllProjects().subscribe(res => {
            this.projects = res;
            this.projects.forEach(project => {
              this.projectValues.push(project.projectName);
            })
          })
        })
      })
    })
    

    

  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const attachment = event.target.files[0];
      this.editTicketForm.patchValue({
        fileSource: attachment
      });
    }
  }

  submit() {
    this.createEditTicketPayload.summary = this.editTicketForm.get('summary').value;
    this.createEditTicketPayload.assignee = this.editTicketForm.get('assignee').value;
    this.createEditTicketPayload.assignedTo = this.editTicketForm.get('assignedTo').value;
    this.createEditTicketPayload.createDate = this.editTicketForm.get('createDate').value;
    this.createEditTicketPayload.description = this.editTicketForm.get('description').value;
    this.createEditTicketPayload.dueDate = this.editTicketForm.get('dueDate').value;
    this.createEditTicketPayload.estimatedTime = this.editTicketForm.get('estimatedTime').value;
    this.createEditTicketPayload.actualTime = this.editTicketForm.get('actualTime').value;
    this.createEditTicketPayload.priority = this.editTicketForm.get('priority').value;
    this.createEditTicketPayload.status = this.editTicketForm.get('status').value;
    this.createEditTicketPayload.projectName = this.editTicketForm.get('projectName').value;
    this.createEditTicketPayload.ticketId = this.id;

    this.ticketService.editTicket(this.id,this.createEditTicketPayload).subscribe(res => {
      this.router.navigate(['/ticket/'+res.ticketId])
    })
  }
}
