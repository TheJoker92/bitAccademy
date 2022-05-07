import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NavigationStart, Event as NavigationEvent } from '@angular/router';
import { Subscription } from 'rxjs';
import { ENDPOINTS } from './app-routing.module';
import { RouteService } from './services/route.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bitAccademy';

  ENDPOINTS = ENDPOINTS

  constructor(public router: Router,
              public routeService: RouteService) {
    
  }

  ngOnInit() {
    this.routeService.router$ = this.router.events
    .subscribe(
      (event: NavigationEvent) => {
        if(event instanceof NavigationStart) {
          this.routeService.actualRoute = event.url.substring(1);
          console.log(this.routeService.actualRoute)
        }
      })
  }

  ngOnDestroy() {
    if (this.routeService.router$) this.routeService.router$.unsubscribe()
  }
}
