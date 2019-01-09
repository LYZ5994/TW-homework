import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InviteComponent implements OnInit {

  items = [
    {
      id: 1,
      name: "Jack"
    },
    {
      id: 2,
      name: "Jennie"
    },
    {
      id: 3,
      name: "Michalle"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  displayUser(user: {id: string; name: string}){
    return user ? user.name : '';
  }


}
