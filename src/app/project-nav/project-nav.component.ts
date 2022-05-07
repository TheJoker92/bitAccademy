import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ENDPOINTS } from '../app-routing.module';
import { ErrorService } from '../services/error/error.service';
import { codeHttp } from '../services/http/codeHttpEnum';
import { HttpService } from '../services/http/http.service';
import { IResponse } from '../services/http/IResponse';
import { ProjectService } from '../services/project.service';
import { LangPipe } from '../utils/pipes/lang.pipe';
import { IProject } from './IProject';

@Component({
  selector: 'app-project-nav',
  templateUrl: './project-nav.component.html',
  styleUrls: ['./project-nav.component.scss']
})
export class ProjectNavComponent implements OnInit {

  projects: IProject[] = []

  newProject: string = LangPipe.translate('PROJECTNAV.NEW_PROJECT')

  constructor(private httpService: HttpService,
              private projectService: ProjectService,
              private router: Router,
              public errorService: ErrorService) { }

  ngOnInit(): void {
    this.httpService.getProjects().subscribe({
      next: (response: IResponse) => {
        switch (response.code) {
          case codeHttp.OK: {
            this.projects = response.message
            console.log(this.projects)
            break
          }
          case codeHttp.FAILED: {
            this.errorService = JSON.parse(response.error)
          }
        }
      },
      error: () => {
        this.errorService.raiseError(ProjectNavComponent.name)
      },      
    })
  }

  select(selectedProject: IProject) {
    for (let project of this.projects) {
      project.isActive = project.id == selectedProject.id
    }

    this.projectService.selectedProject  = selectedProject

    this.router.navigate([ENDPOINTS.LOGGED + "/" + ENDPOINTS.LOGGED_PROJECTS + "/" + selectedProject.id])
  }

  create() {
    for (let project of this.projects) {
      project.isActive = false
    }

    this.projectService.selectedProject  = undefined

    this.router.navigate([ENDPOINTS.LOGGED + "/" + ENDPOINTS.LOGGED_NEW_PROJECT])
  }

}
