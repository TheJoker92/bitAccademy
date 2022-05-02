import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  public static displayResponsive: boolean = true

  constructor(public loader: LoaderService) { }

  ngOnInit(): void {
  }

}
