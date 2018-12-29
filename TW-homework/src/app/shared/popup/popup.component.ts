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
  targetClickEvent: boolean = true;
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

        console.log("Add Success！");
        this.onAdd.emit(res);
        this.hide();

      })
    }
  }

  @Output() onAdd : EventEmitter<any> = new EventEmitter();

  show(event) {
    if(event.type == 'click') {
      this.targetClickEvent = true;
    }
    this.display = true;
  }


  cancel() {
    this.targetClickEvent = false;
  }
  hide() {
    this.resourceName = "";
    this.display = false;
  }

  // 监听页面点击事件
  bindDocumentClickListener(){
    if (!this.documentClickListener) {
      this.documentClickListener = this.renderer.listen('document', 'click', (event) => {
        // console.log(event);
        if (!this.targetClickEvent) {
          this.hide();
        } 
        if(event.target.className.indexOf("cancel-popup") > -1) {
          this.hide();
        }
        this.targetClickEvent = false;
      })
    }
  }

  // 解除页面监听事件
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
