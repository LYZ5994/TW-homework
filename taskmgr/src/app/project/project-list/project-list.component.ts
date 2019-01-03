import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewProjectComponent } from "../new-project/new-project.component";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = [
    {
      "name": "名称1",
      "desc": "描述1",
      "coverImg": "assets/covers/0.jpg"
    },
    {
      "name": "名称2",
      "desc": "描述2",
      "coverImg": "assets/covers/1.jpg"
    },
    {
      "name": "名称3",
      "desc": "描述3",
      "coverImg": "assets/covers/1.jpg"
    },
  ];
  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  oprnNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {dark: true}})
    // afterClosed() 返回一个 Observe
    dialogRef.afterClosed().subscribe(result => console.log(result));  
  }

}
