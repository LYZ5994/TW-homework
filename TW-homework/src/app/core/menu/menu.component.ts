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
  listData: any[] = [];
  reqAgentsList(){
    let arr = [];
    this.dataService.reqDataByGet('http://localhost:3000/agents').then(res => {
      for (const key in res) {
        if (res.hasOwnProperty(key)) {
          const element = res[key];
          arr.push(element)
        }
      }
      this.listData = arr.map(item => {
        return item.name.split('.')[0];
      })
    })
  }

}
