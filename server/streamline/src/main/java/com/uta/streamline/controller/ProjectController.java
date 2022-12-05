package com.uta.streamline.controller;

import com.uta.streamline.dto.ProjectDetails;
import com.uta.streamline.dto.TicketDetails;
import com.uta.streamline.entities.Project;
import com.uta.streamline.entities.Ticket;
import com.uta.streamline.entities.User;
import com.uta.streamline.service.ProjectServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/project")
@AllArgsConstructor
public class ProjectController {
    private final ProjectServiceImpl projectService;

    @GetMapping("/getAllProjects")
    public List<ProjectDetails> getAllProjects() {
        return projectService.getAllProjects();
    }

    @GetMapping("/getProjectByProjectId/{projectId}")
    public ProjectDetails getProjectByProjectId(@PathVariable String projectId) {
        return projectService.getProjectById(Long.valueOf(projectId));
    }

    @PostMapping("/updateProject")
    public ProjectDetails updateProject(@RequestBody ProjectDetails projectDetails) {
        return projectService.updateProject(projectDetails);
    }

    @PostMapping("/createProject")
    public ProjectDetails createProject(@RequestBody ProjectDetails projectDetails) {
        return projectService.createProject(projectDetails);
    }

    @DeleteMapping("/deleteProject/{projectId}")
    public void deleteProject(@PathVariable String projectId) {
        projectService.deleteProject(Long.parseLong(projectId));
    }

    @GetMapping("/getUsersByProject/{projectId}")
    public List<User> getUsersByProject(@PathVariable String projectId) {
        return projectService.getUsersByProjectId(Long.parseLong(projectId));
    }
}
