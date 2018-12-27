import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/dataservice';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  providers: [DataService]
})
export class WorkComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.reqAgentsList();
  }

  listData: any;
  reqAgentsList(){
    this.dataService.reqDataByGet('http://localhost:3000/agents').then(res => {

      this.listData = res

    })
  }

}
