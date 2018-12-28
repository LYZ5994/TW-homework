import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/dataservice';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [ DataService ]
})
export class MenuComponent implements OnInit {

  menu: string = 'agent';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.reqAgentsList();
  }
  // 获取列表数据
  listData: any;
  reqAgentsList(){
    this.dataService.reqDataByGet('http://localhost:3000/agents').then(res => {

      this.listData = res;

    })
  }

}
