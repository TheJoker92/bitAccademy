import { Injectable } from '@angular/core';
import { IProject } from '../project-nav/IProject';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  selectedProject: IProject | undefined

  constructor() { }
}
