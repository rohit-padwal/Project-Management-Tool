import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectDTO } from '../shared/ProjectDTO';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient) { }

  getAllProjects(): Observable<Array<ProjectDTO>> {
    return this.httpClient.get<Array<ProjectDTO>>('http://localhost:8080/api/project/getAllProjects/');
  }

  getProjectByUserName(username: string): Observable<ProjectDTO> {
    return this.httpClient.get<ProjectDTO>('http://localhost:8080/api/project/getByUsername/' + username);
  }

  createProject(project: ProjectDTO): Observable<ProjectDTO> {
    return this.httpClient.post<ProjectDTO>('http://localhost:8080/api/project/createProject', project);
  }

  deleteProject(projectId: string): Observable<void> {
    return this.httpClient.delete<void>('http://localhost:8080/api/project/deleteProject/' + projectId);
  }

  updateProject(project: ProjectDTO): Observable<ProjectDTO> {
    return this.httpClient.post<ProjectDTO>('http://localhost:8080/api/project/updateProject', project);
  }

  getProjectByProjectId(projectId: string): Observable<ProjectDTO> {
    return this.httpClient.get<ProjectDTO>('http://localhost:8080/api/project/getProjectByProjectId/' + projectId);
  }
}
