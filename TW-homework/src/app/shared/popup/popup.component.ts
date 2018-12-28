import { Component, OnInit, Renderer, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../service/dataservice';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() agentInfo;
  display: boolean = false;
  targetClickEvent: boolean = false;
  documentClickListener: any;
  resourceName: string = "";
  constructor(private renderer: Renderer,private dataService: DataService) { }

  ngOnInit() {
  }

  ngAfterViewChecked(){
    this.bindDocumentClickListener();
  }

  addResouse() {
    if(this.resourceName != ''){
      let {...params} = this.agentInfo;
      params.resources.push(this.resourceName);
      const id = params.id;
      this.dataService.reqDataByPut(`http://localhost:3000/agents/${id}`,params).then(res => {

        console.log("success！");
        this.onAdd.emit(res);

      })
    }
  }

  @Output() onAdd : EventEmitter<any> = new EventEmitter();

  show(event) {
    this.display = true;
    if(event.type == 'click') {
      this.targetClickEvent = true;
    }
    // event.stopPropagation();
  }

  hide() {
    this.display = false;
    this.targetClickEvent = false;
    this.unbindDocumentClickListener();
  }

  //监听页面点击事件
  bindDocumentClickListener(){
    if (!this.documentClickListener) {
      this.documentClickListener = this.renderer.listen('document', 'click', (event) => {
        if (!this.targetClickEvent) {
          this.hide();
        }
        this.targetClickEvent = false;
      })
    }
  }

  //解除页面监听事件
  unbindDocumentClickListener() {
    if(this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }

  ngOnDestroy() {
    this.targetClickEvent = false;
    this.unbindDocumentClickListener();
  }

}
