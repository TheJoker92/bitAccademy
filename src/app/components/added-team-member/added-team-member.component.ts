import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/user/IUser';

@Component({
  selector: 'app-added-team-member',
  templateUrl: './added-team-member.component.html',
  styleUrls: ['./added-team-member.component.scss']
})
export class AddedTeamMemberComponent implements OnInit {

  @Input() addedTeamMember: IUser | undefined
  @Output() deleteE: EventEmitter<void> = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    this.deleteE.emit()
  }

}
