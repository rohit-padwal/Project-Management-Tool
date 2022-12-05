import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { TokenInterceptor } from './token-interceptor';
import { AuthModule } from './auth/auth.module';
import { TicketComponent } from './ticket/ticket.component';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from "@ng-select/ng-select";

import { EditComponent } from './ticket/edit/edit.component';
import { KanbanComponent } from './kanban/kanban.component';
import { ProjectComponent } from './project/project.component';
import { EditProjectComponent } from './project/edit-project/edit-project.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CreateComponent } from './ticket/create/create.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import { DatavizComponent } from './userdashboard/dataviz/dataviz.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TicketComponent,
    SignupComponent,
    LoginComponent,
    EditComponent,
    KanbanComponent,
    ProjectComponent,
    EditProjectComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    CreateComponent,
    CreateProjectComponent,
    DatavizComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    EditorModule,
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
