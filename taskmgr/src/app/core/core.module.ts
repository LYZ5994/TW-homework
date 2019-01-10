import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MdIconRegistry } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'
import { loadSvgResource } from '../utils/svg.util'
import { SharedModule } from '../shared/shared.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from '../app-routing.module'

import 'hammerjs';
import 'rxjs/add/operator/take'

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent,
    AppRoutingModule
  ],
  declarations: [
    HeaderComponent, FooterComponent, SidebarComponent
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    ir: MdIconRegistry, 
    ds: DomSanitizer
  ){
    if(parent){
      throw new Error('模块已经存在，不能再次加载');
    }
    loadSvgResource(ir,ds);  // 将公共资源加入模块中 以 避免资源分散及重复使用
  }
 }
