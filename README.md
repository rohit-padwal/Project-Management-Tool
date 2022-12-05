# Streamline - Project Management Tool
----------
Contents
---------------------
* Introduction
* Softwares Used
* Installation
* User Infrastructure
* How to use the website


## Introduction
------------
The project management tool will enable project teams to efficiently manage and distribute tasks to concerned developers and testers. This tool will be built using java based framework as the backend technology and javascript for the UI side of the project. The basic functionalities for this project will cover login portal for users, project and ticket creation page, user dashboard with data analytics tab, Kanban board and project dashboard. Users can access this tool to create/ modify tickets, work on their assigned tickets, collaborate with other members and  stakeholders, keep track of project backlog, and manage deliverables.

## Software Used
--------------
### Developer infrastructure:
### Backend:  
- Java Development Kit version 16
- Apache Maven 3.8.3
- Apache Tomcat 9.0.53
- Spring Boot framework - as per project requirements from https://start.spring.io/
- Spring Web
- Spring Data JPA
- Spring Security
### Frontend: 
- Node.js v16.10.0
- Node package modules - npm v7.24.0
- Angular command line interface

### Database: 
- MySQL Workbench
- MySQL Community Server

### Installation
Make sure the softwares are installed.
Install the Frontend dependencies and devDependencies and start the server.

```sh
cd Streamline\client\streamline-angular
npm install
```


## User infrastructure
-------------------
- User must download the zip file of the project from Github.
- Web browser with good internet connection for using the web application
- Use latest version of Google Chrome, Microsoft Edge, Safari, Mozilla Firefox for better user experience.

## How to use the website
----------------------

* User should register (signup) into the system by hitting the Signup button that is visible on the above right corner of the page and by using valid Email ID, User Name (unique username should be provided by the user) and Password.

* Once the user is registered or if the user is already registered into the system, user can login to the system directly by hitting the Login button that is visible on the above right corner.

* Once the user is logged into the system, user lands on the user-dashboard page, where user can see the list of tickets that are in different status such as list of tickets that are 'Open' & 'In-Progress' , 'Test '& 'Closed' along with the ticket's priority.
	
* The user-dashboard page will show the number of projects that the user is assigned to. Once the user clicks on the projects button, the page will be redirected to the list of projects that the user is assigned. 

* The user-dashboard page will show the notifications and once the user clicks on the 'notifications', the user can be able to see the list of notifications he got or tagged to.

* The user-dashboard page will have an option to create new tickets and the user can click on the create ticket and the user will be redirected to a page where he/she can create new ticket.

* The user-dashboard page will contain 'data visualization', where user can see the list of tickets he worked on or assigned to or in-progress in a graphical view.	

* User will be able to open the tickets just by clicking on the ticket. Once the user clicks on the ticket, then the website will be redirected to ticket details page.

* The ticket page will contain the details of the ticket such as the 'Description' of the ticket, 'Project Name', 'Create Date', 'Assignee', 'Assigned To', 'Status', 'Due Date', 'Priority' and list of Comments. The user can also add, update or delete the comments for the ticket.
  
* If the user wants to edit any details of the ticket, user can click on the 'EDIT TICKET' button visible in the Ticket Details table on the right of the Description.
 
* Once the Edit Ticket button is clicked, the website will be redirected to the edit page where the user can edit the fields like 'Summary', 'Project Name', 'Status', 'Priority', 'Due Date', 'Estimated Time', 'Actual Time', 'Description' and user can add attachments and save the changes using Submit button or can cancel the changes using Discard button. User cannot edit or make changes to 'Create Date' and 'Assignee'.

* System contains a coded Admin who is pre-existed in the system as per the system design. The Admin can view the admin dashboard where the dashboard contains options such as 'Create New User' (admin can create new user), 'Create Project' (admin can create new projects) and 'Projects' (the list of projects). Once the admin clicks on any of the field above, the website redirects to the respective pages. 

* Create Project page will contain to add new project (admin can give Project Name) and add(assign) the existing users to the project and can click on 'Create' button visible on the bottom right corner of the page that creates a new project and the page will redirect back to Admin dashboard.

* Create New User page will contain registration of new users by the admin.

* By clicking on the project from the admin dashboard, it will redirect to Kanban board of that project where the Kanboard will show the list of tickets in that project according to the status of the tickets. 
 

