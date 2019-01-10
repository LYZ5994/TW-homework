import { Component, OnInit, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ComfirmDialogComponent } from '../../shared/comfirm-dialog/comfirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';
import { slideToRight } from "../../animate/router.anim";
import { SCROLL_DISPATCHER_PROVIDER_FACTORY } from '@angular/material/typings/core/overlay/scroll/scroll-dispatcher';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [slideToRight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskHomeComponent implements OnInit {

  @HostBinding('@routerAnim') state;

  lists = [
    {
      id: 1,
      name: '待办',
      tasks: [
        {
          id: 1,
          desc: '任务一：完成登录页',
          priority: 3,
          owner: {
            id: 1,
            name: 'Jack',
            avatar: 'avatars:svg-11'
          },
          completed: false,
          dueData: new Date(),
          reminder: new Date()
        },
        {
          id: 2,
          desc: '任务二：完成项目页',
          priority: 3,
          owner: {
            id: 1,
            name: 'Jenny',
            avatar: 'avatars:svg-12'
          },
          completed: true,
          dueData: new Date()
        }
      ]
    },
    {
      id: 2,
      name: '进行中',
      tasks: [
        {
          id: 1,
          desc: '任务三：完成任务页',
          priority: 2,
          owner: {
            id: 1,
            name: 'Jack',
            avatar: 'avatars:svg-10'
          },
          completed: true,
          dueData: new Date()
        },
        {
          id: 1,
          desc: '任务四：完成框架',
          priority: 1,
          owner: {
            id: 1,
            name: 'Jenny',
            avatar: 'avatars:svg-9'
          },
          completed: false,
          dueData: new Date(),
          reminder: new Date()
        }
      ]
    }
  ]
  constructor(private dialog: MdDialog,private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  launchNewTaskClick(){
    this.dialog.open(NewTaskComponent,{data: {title: '新建任务'}});
  }

  launchCopyTaskClick() {
    const dialogRef = this.dialog.open(CopyTaskComponent,{data: {lists: this.lists}})
  }

  launchUpdateTaskClick(task) {
    const dialogRef = this.dialog.open(NewTaskComponent,{data: {title: '修改任务',task: task}})
  }

  launchDelTaskClick() {
    const dialogRef = this.dialog.open(ComfirmDialogComponent,{data: {title: '删除任务',content: '是否确认删除任务？'}})
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchEditListNameClick() {
    const dialogRef = this.dialog.open(NewTaskListComponent,{data: {title: '修改列表名称'}})
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  openNewTaskDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent,{data: {title: '新建列表'}})
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  handleMove(srcData, list){
    switch(srcData.tag) {
      case 'task-item':
        console.log('task-item');
        break;
      case 'task-list':
        console.log('task-list');
        break;
    }
  }

}
