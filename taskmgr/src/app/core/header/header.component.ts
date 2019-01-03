import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggle = new EventEmitter<void>();
  @Output() toggleDarkTheme = new EventEmitter<boolean>();
  constructor() { 
  }

  ngOnInit() {
  }

  openSidebar(){
    this.toggle.emit();
  }

  // 切换主题模式
  onChange(checked: boolean) {
    this.toggleDarkTheme.emit(checked);
  }

}
