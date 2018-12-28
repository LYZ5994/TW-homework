import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { PopupComponent } from './popup/popup.component'

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
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
