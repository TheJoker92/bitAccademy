import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploaded-file',
  templateUrl: './uploaded-file.component.html',
  styleUrls: ['./uploaded-file.component.scss']
})
export class UploadedFileComponent implements OnInit {

  @Input() uploadedFile: File | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
