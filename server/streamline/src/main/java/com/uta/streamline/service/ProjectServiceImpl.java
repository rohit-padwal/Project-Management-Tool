package com.uta.streamline.service;

import com.uta.streamline.dto.ProjectDetails;
import com.uta.streamline.entities.Project;
import com.uta.streamline.entities.User;
import com.uta.streamline.repository.ProjectRepository;
import com.uta.streamline.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ProjectServiceImpl {
    private ProjectRepository projectRepository;
    private UserRepository userRepository;
    public ProjectDetails createProject(ProjectDetails projectDetails) {
        Project project = new Project();
        project.setProjectName(projectDetails.getProjectName());
        project.setUsers(projectDetails.getUsers());
        project.setTickets(projectDetails.getTickets());
        projectDetails.setProjectId(projectRepository.save(project).getProjectId());
        List<User> users = projectDetails.getUsers();
        mapUsersToProject(users, projectDetails.getProjectId());
        return projectDetails;
    }

    public ProjectDetails updateProject(ProjectDetails projectDetails) {
        Project project = projectRepository.getById(projectDetails.getProjectId());
        project.setProjectName(projectDetails.getProjectName());
        project.setTickets(projectDetails.getTickets());
        List<User> users = projectDetails.getUsers();
        mapUsersToProject(users, projectDetails.getProjectId());
        project.setUsers(projectDetails.getUsers());
        projectRepository.save(project);
        return projectDetails;
    }

    private void mapUsersToProject(List<User> users, Long projectId) {
        for (User user : users) {
            user.setProjectId(projectId);
            userRepository.save(user);
        }
    }

    public void deleteProject(Long projectId) {
        projectRepository.deleteById(projectId);
    }

    public List<ProjectDetails> getAllProjects() {
        List<Project> projects = projectRepository.findAll();
        List<ProjectDetails> projectDetails = new ArrayList<>();
        for (Project project : projects) {
            projectDetails.add(mapProjectToProjectDetails(project));
        }
        return projectDetails;
    }

    private ProjectDetails mapProjectToProjectDetails(Project project) {
        ProjectDetails projectDetails = new ProjectDetails();
        projectDetails.setProjectId(project.getProjectId());
        projectDetails.setProjectName(project.getProjectName());
        //projectDetails.setTickets(project.getTickets());
        //projectDetails.setUsers(project.getUsers());
        return projectDetails;
    }

    public Project getProjectByProjectName(String projectName) {
        return projectRepository.findByProjectName(projectName);
    }

    public ProjectDetails getProjectById(Long projectId) {
        return mapProjectToProjectDetails(projectRepository.findById(projectId).get());
    }

    public List<User> getUsersByProjectId(Long projectId) {
        Optional<Project> optional = projectRepository.findById(projectId);
        return optional.get().getUsers();
    }
}
