import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';
import { DragDropService } from '../drag-drop.service';

@Directive({
  selector: '[app-draggable][draggedClass][dragTag][dragData]'
})
export class DragDirective {

  @Input() draggedClass: string;
  @Input() dragTag: string;
  @Input() dragData: string;

  private _isDraggable = false;

  @Input('app-draggable')
  set isDraggable(val: boolean) {
    this._isDraggable = val;
    this.rd.setAttribute(this.el.nativeElement,'draggable', `${val}`)
  }

  get isDraggable() {
    return this._isDraggable;
  }

  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private service: DragDropService
  ) { }

  @HostListener('dragstart',['$event'])
  onDragStart(ev: Event) {
    // 判断事件是否是指令应用元素发起的
    if(this.el.nativeElement === ev.target) {
      this.rd.addClass(this.el.nativeElement, this.draggedClass);
      this.service.setDragData({tag: this.dragTag, data: this.dragData})
    }
  }

  @HostListener('dragend',['$event'])
  onDragEnd(ev: Event) {
    // 判断事件是否是指令应用元素发起的
    if(this.el.nativeElement === ev.target) {
      this.rd.removeClass(this.el.nativeElement, this.draggedClass);
    }
  }

}
