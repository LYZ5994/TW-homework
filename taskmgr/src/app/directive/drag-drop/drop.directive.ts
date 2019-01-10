import { Directive,  HostListener, ElementRef, Renderer2, Input, Output, EventEmitter } from '@angular/core';
import { DragDropService, DragData } from '../drag-drop.service';

@Directive({
  selector: '[app-droppable][dragEnterClass][dragTags]'
})
export class DropDirective {

  @Output() dropped = new EventEmitter<DragData>()
  @Input() dragEnterClass: string;
  @Input() dragTags: string[] = [];
  private data$;

  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private service: DragDropService
  ) { 
    this.data$ = this.service.getDragData().take(1);
  }

  @HostListener('dragenter',['$event'])
  onDragEnter(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    // 判断事件是否是指令应用元素发起的
    if(this.el.nativeElement === ev.target) {
      this.data$.subscribe(dragData => {
        if(this.dragTags.indexOf(dragData.tag) > -1)
          this.rd.addClass(this.el.nativeElement, this.dragEnterClass);
      })
    }
  }

  @HostListener('dragover',['$event'])
  onDragOver(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if(this.el.nativeElement === ev.target) {
      this.data$.subscribe(dragData => {
        if(this.dragTags.indexOf(dragData.tag) > -1){
          this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'all');
          this.rd.setProperty(ev, 'dataTransfer.dropEffect', 'move');
        }else{
          this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'none');
          this.rd.setProperty(ev, 'dataTransfer.dropEffect', 'none');
        }
      })
    }
  }

  @HostListener('dragleave',['$event'])
  onDragLeave(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if(this.el.nativeElement === ev.target) {
      this.data$.subscribe(dragData => {
        if(this.dragTags.indexOf(dragData.tag) > -1)
          this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
      })
    }
  }

  @HostListener('drop',['$event'])
  onDrop(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if(this.el.nativeElement === ev.target) {
      this.data$.subscribe(dragData => {
        if(this.dragTags.indexOf(dragData.tag) > -1){
          this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
          this.dropped.emit(dragData);
          this.service.clearDragData();
        }
      })
    }
  }

}
