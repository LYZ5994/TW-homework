import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http'
import { 
  MdIconModule, 
  MdButtonModule, 
  MdInputModule,
  MdGridListModule,
  MdTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    MdIconModule,
    MdTabsModule,
    MdInputModule,
    MdGridListModule
  ],
  exports: [
    CommonModule,
    MdIconModule,
    MdTabsModule,
    MdInputModule,
    MdGridListModule
  ],
  declarations: []
})
export class SharedModule { }
