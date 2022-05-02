import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  firstName: string = "Alessandro"
  lastName: string = "De Micco"
  userName: string = "aledem92"
  email: string = "demicco.alessandro92@gmail.com"    
  phoneNumber: string = ""
  password: string = "prova"

  constructor() { }
}
