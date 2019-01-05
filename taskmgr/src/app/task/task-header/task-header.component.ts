import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {

  @Input() header = '';
  @Output() newTaskClick = new EventEmitter<void>();
  @Output() copyTaskClick = new EventEmitter<void>();
  @Output() delTaskClick = new EventEmitter<void>();
  @Output() editListNameClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onNewTaskClick(){
    this.newTaskClick.emit();
  }

  onCopyTaskClick() {
    this.copyTaskClick.emit();
  }

  onDelTaskClick() {
    this.delTaskClick.emit();
  }

  onEditListNameClick() {
    this.editListNameClick.emit();
  }

}
