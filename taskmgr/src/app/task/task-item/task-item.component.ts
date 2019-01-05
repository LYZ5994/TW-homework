import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { itemAnim } from '../../animate/item.anim';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [
    itemAnim
  ]
})
export class TaskItemComponent implements OnInit {

  @Input() item;
  @Input() avatar;
  @Output() updateTaskClick = new EventEmitter<void>();
  widerPriority = 'in';
  @HostListener('mouseenter')    
    onMouseEnter() {
      this.widerPriority = 'out'
    }
  @HostListener('mouseout')
    onMouseOut() {
      this.widerPriority = 'in'
    }
  constructor() { }

  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avatar : 'unassigned';
  }
  
  onUpdateTaskClick() {
    this.updateTaskClick.emit();
  }

  onCheckboxClick(ev: Event) {
    ev.stopPropagation();
  }

}
