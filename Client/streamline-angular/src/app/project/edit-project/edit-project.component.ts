import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgSelectModule } from "@ng-select/ng-select";
import { UserDTO } from 'src/app/shared/UserDTO';
import { UserService } from 'src/app/services/user.service';
import { ProjectService } from 'src/app/services/project.service';
import { ProjectDTO } from 'src/app/shared/ProjectDTO';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  users: Array<UserDTO>;
  editProjectForm: FormGroup;
  selected: any;
  projectDTO: ProjectDTO;
  id: string;
  project:ProjectDTO;
  userDTOs:Array<UserDTO>;
  constructor(private userService: UserService,
    private projectService: ProjectService,private route: ActivatedRoute) { 
      this.projectDTO = {
        projectName: '',
        users: [],
        projectId: '',
        tickets: []
      };
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.projectService.getProjectByProjectId(this.id).subscribe(res => {
      this.project = res;
      //this.userDTOs = this.project.users;
      this.editProjectForm = new FormGroup({
        projectName: new FormControl(this.project.projectName, Validators.required),
        users: new FormControl('', Validators.required)
      });
    });
    this.userService.getAllUsers().subscribe(res => {
      this.users = res;
    });
  }

  submit() {
    this.projectDTO.projectId = this.id;
    this.projectDTO.projectName = this.editProjectForm.value.projectName;
    this.projectDTO.users = this.editProjectForm.value.users;

    this.projectService.updateProject(this.projectDTO).subscribe(res => {
    })
  }
}
