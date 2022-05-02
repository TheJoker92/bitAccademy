import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LangPipe } from '../utils/pipes/lang.pipe';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  displayResponsive: boolean = false

  header: string = LangPipe.translate("TOPNAV.POPUPIMPOSTAZIONI.HEADER")
  confirmLabel: string = LangPipe.translate("TOPNAV.POPUPIMPOSTAZIONI.CONFIRM")
  cancelLabel: string = LangPipe.translate("TOPNAV.POPUPIMPOSTAZIONI.CANCEL")

  public settingForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    userName: new FormControl(''),
    email: new FormControl(''),    
    phoneNumber: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  constructor(private userService: UserService) {
       
  }

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


    this.settingForm.controls['firstName'].setValue(this.userService.firstName)
    this.settingForm.controls['lastName'].setValue(this.userService.lastName)
    this.settingForm.controls['userName'].setValue(this.userService.userName)
    this.settingForm.controls['email'].setValue(this.userService.email)
    this.settingForm.controls['phoneNumber'].setValue(this.userService.phoneNumber)
    this.settingForm.controls['password'].setValue(this.userService.password) 
    this.settingForm.controls['confirmPassword'].setValue(this.userService.password) 
  }

  openSettings() {
    this.displayResponsive = true
  }

  logout() {}

}
