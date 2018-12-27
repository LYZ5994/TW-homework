import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http'
import { 
  MdToolbarModule, 
  MdIconModule, 
  MdButtonModule, 
  MdCardModule, 
  MdInputModule,
  MdListModule,
  MdTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    MdIconModule,
    MdTabsModule,
    MdInputModule
  ],
  exports: [
    CommonModule,
    MdIconModule,
    MdTabsModule,
    MdInputModule
  ],
  declarations: []
})
export class SharedModule { }
