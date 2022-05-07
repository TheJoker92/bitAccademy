import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NavigationStart, Event as NavigationEvent } from '@angular/router';
import { Subscription } from 'rxjs';
import { ENDPOINTS } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bitAccademy';

  router$: Subscription | undefined

  actualRoute: string = ""

  ENDPOINTS = ENDPOINTS

  constructor(public router: Router) {
    
  }

  ngOnInit() {
    this.router$ = this.router.events
    .subscribe(
      (event: NavigationEvent) => {
        if(event instanceof NavigationStart) {
          this.actualRoute = event.url.substring(1);
        }
      })
  }

  ngOnDestroy() {
    if (this.router$) this.router$.unsubscribe()
  }
}
