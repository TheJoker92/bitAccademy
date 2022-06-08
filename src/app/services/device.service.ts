import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  isXsDevice: boolean = false

  width: number = window.screen.width;
  height: number = window.screen.height;


  constructor() {
    this.isXsDevice = this.width < 500
  }
}
