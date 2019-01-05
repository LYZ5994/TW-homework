import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { cardAnim } from '../../animate/card.anim';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [
    cardAnim
  ]
})
export class ProjectItemComponent implements OnInit {

  @Input() item;
  @Output() onInvite = new EventEmitter<void>();
  @Output() onEdit = new EventEmitter<void>();
  @Output() onDel = new EventEmitter<void>();

  @HostBinding('@card') cardSate = 'out';   // 相当于 [@card]='cardSate'
  @HostListener('mouseenter')         // HostListener 可以监听鼠标事件
    onMouseEnter() {
      this.cardSate = 'hover'
    }
  @HostListener('mouseout')
    onMouseOut() {
      this.cardSate = 'out'
    }

  constructor() { }

  ngOnInit() {
  }

  onInviteClick() {
    this.onInvite.emit();
  }

  onEditClick() {
    this.onEdit.emit();
  }

  onDeleteClick() {
    this.onDel.emit();
  }

}
