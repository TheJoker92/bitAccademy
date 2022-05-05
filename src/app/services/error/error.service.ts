import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  raiseError(className: string) {
    throw("Error occurs in: " + className)
  }
}
