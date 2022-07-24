import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LangPipe } from 'src/app/utils/pipes/lang.pipe';

@Component({
  selector: 'app-button-options',
  templateUrl: './button-options.component.html',
  styleUrls: ['./button-options.component.scss']
})
export class ButtonOptionsComponent implements OnInit {

  @Input() items: MenuItem[] = []

  constructor() { }

  ngOnInit(): void {
    
  }

  logout() {}

}
