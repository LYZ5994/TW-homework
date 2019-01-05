import { Component, OnInit, HostBinding } from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewProjectComponent } from "../new-project/new-project.component";
import { InviteComponent } from '../invite/invite.component';
import { ComfirmDialogComponent } from '../../shared/comfirm-dialog/comfirm-dialog.component';
import { slideToRight } from "../../animate/router.anim";
import { listAnimation } from "../../animate/list.anim";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [slideToRight, listAnimation]
})
export class ProjectListComponent implements OnInit {

  @HostBinding('@routerAnim') state;

  projects = [
    {
      "id": "1",
      "name": "名称1",
      "desc": "描述1",
      "coverImg": "assets/covers/0.jpg"
    },
    {
      "id": "2",
      "name": "名称2",
      "desc": "描述2",
      "coverImg": "assets/covers/1.jpg"
    },
    {
      "id": "3",
      "name": "名称3",
      "desc": "描述3",
      "coverImg": "assets/covers/1.jpg"
    },
  ];
  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: '新建项目'}})
    // afterClosed() 返回一个 Observe
    dialogRef.afterClosed().subscribe(result => {
      this.projects = [...this.projects, {
        "id": "4",
        "name": "新项目1",
        "desc": "描述4",
        "coverImg": "assets/covers/8.jpg"
      }, {
        "id": "5",
        "name": "新项目2",
        "desc": "描述5",
        "coverImg": "assets/covers/9.jpg"
      }]
    });  
  }

  launchInviteDialog() {
    this.dialog.open(InviteComponent)
  }

  launchEditDialog(project) {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: '修改项目', project: project}});
  }

  launchDelDialog(project) {
    const dialogRef = this.dialog.open(ComfirmDialogComponent, {data: {title: '删除项目', content: '是否确认删除项目？'}});
    dialogRef.afterClosed().subscribe(result => {
      this.projects = this.projects.filter(ele => ele.id !== project.id)
    });
  }

}
