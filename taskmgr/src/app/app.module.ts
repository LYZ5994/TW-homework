import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdSidenavModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
// import { ProjectModule } from './project/project.module';
// import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [    // 该组件拥有的组件
    AppComponent
  ], 
  imports: [
    BrowserModule,   // 导入 BrowerModule 以获取浏览器特有的服务，比如 DOM 渲染、无害化处理和位置
    MdSidenavModule,
    CoreModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    // LoginModule,
    // ProjectModule
  ],
  providers: [],   // 各种服务提供商
  bootstrap: [AppComponent]   // 各组件，Angular 创建它并插入 index.html 宿主页面
})
export class AppModule { }
