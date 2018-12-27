import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'
import { MdIconRegistry } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'
import { loadSvgResource } from '../utils/svg.util'

import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { MenuComponent } from './menu/menu.component';
import { WorkComponent } from './work/work.component'

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HeaderComponent, 
    FooterComponent,
    MenuComponent,
    WorkComponent
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    MenuComponent, 
    WorkComponent
  ]
})
export class CoreModule { 
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    ir: MdIconRegistry, 
    ds: DomSanitizer
  ){
    if(parent){
      throw new Error('模块已经存在，不能再次加载！')
    }
    loadSvgResource(ir, ds);
  }
}
