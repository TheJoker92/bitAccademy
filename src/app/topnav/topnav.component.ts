import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LangPipe } from '../utils/pipes/lang.pipe';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  displayResponsive: boolean = false

  header: string = LangPipe.translate("TOPNAV.POPUPIMPOSTAZIONI.HEADER")
  confirmLabel: string = LangPipe.translate("TOPNAV.POPUPIMPOSTAZIONI.CANCEL")
  cancelLabel: string = LangPipe.translate("TOPNAV.POPUPIMPOSTAZIONI.CONFIRM")

  public settingForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor() { }

  items: MenuItem[] = []
  
  ngOnInit(): void {
    this.items = [
      {
          label: LangPipe.translate('TOPNAV.SETTINGS'),
          icon: "pi pi-cog",
          command: (onclick)=> {this.openSettings()}

          
      },
      {
        label: LangPipe.translate('TOPNAV.EXIT'),
        icon: "pi pi-sign-out",
        command: (onclick)=> {this.logout()}
    }
  ]
  }

  openSettings() {
    this.displayResponsive = true
  }

  logout() {}

}
