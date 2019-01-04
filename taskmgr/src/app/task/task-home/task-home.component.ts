import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

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
  constructor() { }

  ngOnInit() {
  }

}
