import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  router$: Subscription | undefined

  actualRoute: string = ""

  constructor() { }
}
