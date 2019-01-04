import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Input() item;
  @Output() onInvite = new EventEmitter<void>();
  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  onInviteClick() {
    this.onInvite.emit();
  }

}
