import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationStart, Event as NavigationEvent } from '@angular/router';
import { ENDPOINTS } from './app-routing.module';
import { RouteService } from './services/route.service';
import { PrimeNGConfig } from 'primeng/api';
import { LangPipe } from './utils/pipes/lang.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bitAccademy';

  ENDPOINTS = ENDPOINTS

  constructor(public router: Router,
              public routeService: RouteService,
              private config: PrimeNGConfig) {
    
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

      this.config.setTranslation({
        accept: LangPipe.translate('PRIMENG.ACCEPT'),
        reject: LangPipe.translate('PRIMENG.REJECT'),
        emptyMessage: LangPipe.translate('PRIMENG.EMPTYMESSAGE')
        //translations
    });
  }

  ngOnDestroy() {
    if (this.routeService.router$) this.routeService.router$.unsubscribe()
  }
}
