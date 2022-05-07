import { Component, OnInit } from '@angular/core';
import { ENDPOINTS } from 'src/app/app-routing.module';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.scss']
})
export class LoggedComponent implements OnInit {

  ENDPOINTS = ENDPOINTS

  constructor(public routeService: RouteService) {
    console.log(this.routeService.actualRoute)
  }

  ngOnInit(): void {
  }

}
