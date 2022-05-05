import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from './IResponse';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getProjects(): Observable<IResponse> {
    return this.http.get<IResponse>("assets/mock/projects.json")
  }
}
