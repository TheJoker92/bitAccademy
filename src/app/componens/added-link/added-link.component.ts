import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-added-link',
  templateUrl: './added-link.component.html',
  styleUrls: ['./added-link.component.scss']
})
export class AddedLinkComponent implements OnInit {

  @Input() addedLink: string | undefined
  @Output() deleteE: EventEmitter<void> = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    this.deleteE.emit()
  }

}
