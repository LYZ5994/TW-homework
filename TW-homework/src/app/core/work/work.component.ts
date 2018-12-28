import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/dataservice';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  providers: [ DataService ]
})
export class WorkComponent implements OnInit {

  tabActive: string = 'all';
  showList: string = 'list';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.reqAgentsList();
  }
  // 获取列表数据
  listData: any;
  reqAgentsList(){
    this.dataService.reqDataByGet('http://localhost:3000/agents').then(res => {

      this.listData = res

    })
  }

  // 更新资源
  updateResources(event) { 
    return event.resources;
  }

}
