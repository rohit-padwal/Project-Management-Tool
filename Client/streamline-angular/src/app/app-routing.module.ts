import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TicketComponent } from './ticket/ticket.component';
import { EditComponent } from './ticket/edit/edit.component';
import { KanbanComponent } from './kanban/kanban.component';
import { EditProjectComponent } from './project/edit-project/edit-project.component';
import { ProjectComponent } from './project/project.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CreateComponent } from './ticket/create/create.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import { DatavizComponent } from './userdashboard/dataviz/dataviz.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent },
  { path: 'ticket/:id', component: TicketComponent },
  { path: 'editTicket/:id', component: EditComponent },
  { path: 'kanban', component: KanbanComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'editProject/:id', component: EditProjectComponent },
  { path: 'userDashboard', component: UserdashboardComponent },
  { path: 'adminDashboard', component: AdmindashboardComponent },
  { path: 'createTicket', component: CreateComponent },
  { path: 'createProject', component: CreateProjectComponent },
  { path: 'data-visualization', component: DatavizComponent},
  { path: 'notification', component: NotificationComponent },
  { path: '', component: UserdashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
