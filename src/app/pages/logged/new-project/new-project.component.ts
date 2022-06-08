import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { flush } from '@angular/core/testing';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  @ViewChild('fileUpload') fileUpload: ElementRef | undefined

  public uploadedFiles: File[] = []

  constructor() { }

  ngOnInit(): void { }

  addNewFile() {
    document.getElementById("inputfile")?.click()

    console.log(document.getElementById("inputfile"))
  }

  importFile(event: any) {
    var interval = setInterval(( )=> {
      let uploadingFiles = this.fileUpload?.nativeElement.files
      console.log(uploadingFiles)
      if (uploadingFiles.length) {

        let notUploadedFiles = []
        for (let index = 0; index < uploadingFiles.length; index++) {
          var uploadingFile: File = uploadingFiles.item(index)

          if (this.uploadedFiles.find((uploadedFile: File) => uploadedFile.name == uploadingFile.name)) {
            notUploadedFiles.push(uploadingFile)
          } else {
            this.uploadedFiles.push(uploadingFile)
          }
        }

        clearInterval(interval)

      }
    }, 1000)
  }

}
