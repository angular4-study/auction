/**
 * 模块
 * @NgModule 声明了一个模块
 * declarations： 声明模块中有什么东西（只能声明组件，指令，管道）
 * imports ：声明模块中依赖的其他模块
 * providers： 声明模块中提供什么服务（只能声明服务）
 * bootstrap： 声明模块的 [主] 组件
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
