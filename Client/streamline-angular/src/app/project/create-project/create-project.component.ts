import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgSelectModule } from "@ng-select/ng-select";
import { UserDTO } from 'src/app/shared/UserDTO';
import { UserService } from 'src/app/services/user.service';
import { ProjectService } from 'src/app/services/project.service';
import { ProjectDTO } from 'src/app/shared/ProjectDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  users: Array<UserDTO>;
  editProjectForm: FormGroup;
  selected: any;
  projectDTO: ProjectDTO;

  constructor(private userService: UserService,
    private projectService: ProjectService,
    private router: Router) { 
      this.projectDTO = {
        projectName: '',
        users: [],
        projectId: '',
        tickets: []
      };
    }

  ngOnInit(): void {
    this.editProjectForm = new FormGroup({
      projectName: new FormControl('', Validators.required),
      users: new FormControl('', Validators.required)
    });
    this.userService.getAllUsers().subscribe(res => {
      this.users = res;
    });
  }

  submit() {
    this.projectDTO.projectName = this.editProjectForm.value.projectName;
    this.projectDTO.users = this.editProjectForm.value.users;

    this.projectService.createProject(this.projectDTO).subscribe(res => {
      this.router.navigate(['/adminDashboard'],
      { queryParams: { registered: 'true' } });
    })
  }


}
