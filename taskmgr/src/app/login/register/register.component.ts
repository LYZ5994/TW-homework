import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  items: string[] = [];
  constructor() { }

  ngOnInit() {
    for (let index = 0; index < 14; index++) {
      this.items.push(`avatars:svg-${index+1}`);
    }
  }

}
