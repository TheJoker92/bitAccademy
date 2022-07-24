import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Listbox } from 'primeng/listbox';
import { IUser } from 'src/app/user/IUser';
import { EMAIL_REGEX } from 'src/app/utils/const';
import { convertFileToBase64 } from 'src/app/utils/utils';


@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  @ViewChild('fileUpload') fileUpload: ElementRef | undefined
  @ViewChild('searchUsers') searchUsers: ElementRef | undefined
  @ViewChild('pListBox') pListBox: Listbox | undefined

  isCheckbox: boolean = true
  displayPeopleResult: boolean = true

  public projectForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    users: new FormControl([]),
    attachments: new FormControl([]),    
    links: new FormControl([])
  });

  public addedLinks: string[] = []

  public uploadedFiles: File[] = []

  public users: IUser[] = [
    {
      id: 2,
      firstame: "Francesco",
      lastname: "Stefanelli",
      nickname: "Lorenzo",
      email: "fra.stefanelli@gmail.com",
      projectLinks: ""
    },
    {
      id: 3,
      firstame: "Alessandro",
      lastname: "Pasquini",
      nickname: "Alex",
      email: "alex.pas93@gmail.com",
      projectLinks: ""
    }
  ]

  searchedUsers: IUser[] = []
  selectedUsers: IUser[] = []
  addedUsers: IUser[] = []
 
  constructor() { }

  ngOnInit(): void {
    this.projectForm.controls["users"].valueChanges.subscribe((selectedUserIds: number[]) => {
      this.addedUsers = this.users.filter((user: IUser) => selectedUserIds.includes(user.id)) 
    })
  }

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

  onSearch() {
    this.displayPeopleResult = true

    let term = this.searchUsers?.nativeElement.value.toLowerCase()

    this.searchedUsers = []

    if (term) {
      this.searchedUsers =  this.users.filter((user: IUser) => user.email.toLowerCase().includes(term) || 
                                                            user.firstame.toLowerCase().includes(term) || 
                                                            user.lastname.toLowerCase().includes(term) || 
                                                            user.nickname.toLowerCase().includes(term))
    }

    if(term.match(EMAIL_REGEX)) {
      let unknownUser: any = {
        id: -1,
        email: term
      }
      this.searchedUsers.push(unknownUser)
    }
    
  }

  

  onClickItem(event: any) {
    console.log(this.projectForm.value)
  }

  deleteAddedLink(deletingLink: String) {
    this.addedLinks = this.addedLinks.filter(link => link !== deletingLink)
  }


  deleteAddedFile(deletingFile: File) {
    this.uploadedFiles = this.uploadedFiles.filter(file => file.name !== deletingFile.name)
  }

  deleteAddedUser(deletingUser: IUser) {
    this.selectedUsers = this.selectedUsers.filter(selectedUser => selectedUser.id !== deletingUser.id)
    this.addedUsers = this.addedUsers.filter(addedUser => addedUser.id !== deletingUser.id)
  }

  onSelectionPeopleConfirm() {
    this.displayPeopleResult = false
  }

  createProject() {
    let uploadedFileListBase64: string[] = []

    for (let uploadedFile of this.uploadedFiles) {
      let convertFileToBase64$ = convertFileToBase64(uploadedFile).subscribe({
        next: (fileBase64: string) => {
          uploadedFileListBase64.push(fileBase64)
          convertFileToBase64$.unsubscribe()
        }
      })   
    }

    this.projectForm.controls['attachments'].setValue(uploadedFileListBase64)
    console.log(this.projectForm.value)
  }
}
