import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ENDPOINTS } from '../app-routing.module';
import { ErrorService } from '../services/error/error.service';
import { codeHttp } from '../services/http/codeHttpEnum';
import { HttpService } from '../services/http/http.service';
import { IResponse } from '../services/http/IResponse';
import { ProjectService } from '../services/project.service';
import { LangPipe } from '../utils/pipes/lang.pipe';
import { IProject } from './IProject';
import { MenuItem } from 'primeng/api';
import { DeviceService } from '../services/device.service';


@Component({
  selector: 'app-project-nav',
  templateUrl: './project-nav.component.html',
  styleUrls: ['./project-nav.component.scss']
})
export class ProjectNavComponent implements OnInit {
  items: MenuItem[] = []

  projects: IProject[] = []

  newProject: string = LangPipe.translate('PROJECTNAV.NEW_PROJECT')

  constructor(private httpService: HttpService,
              private projectService: ProjectService,
              private router: Router,
              public device: DeviceService, 
              public errorService: ErrorService) {
                
              }

  ngOnInit(): void {
    this.items = [
      {
          label: 'File',
          items: [{
                  label: 'New', 
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {label: 'Quit'}
          ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      }
  ];

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
