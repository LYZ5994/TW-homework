import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { PopupComponent } from './popup/popup.component'

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [
    CommonModule,
    PopupComponent
  ],
  declarations: [
    PopupComponent
  ]
})
export class SharedModule { }
