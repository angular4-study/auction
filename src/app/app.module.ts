import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';

import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {SearchComponent} from './search/search.component';
import {CarouselComponent} from './carousel/carousel.component';
import {ProductComponent} from './product/product.component';
import {StarsComponent} from './stars/stars.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {ProductService} from './shared/product.service';
import {FilterPipe} from './pipe/filter.pipe';

/**
 * 模块
 * @NgModule 声明了一个模块
 * declarations： 声明模块中有什么东西（只能声明组件，指令，管道）
 * imports ：声明模块中依赖的其他模块
 * providers： 声明模块中提供什么服务（只能声明服务）
 * bootstrap： 声明模块的 [主] 组件
 */
// 手动配置路由写法
const routeConfig: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product/:productId', component: ProductDetailComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    FilterPipe,
    FooterComponent,
    NavbarComponent,
    SearchComponent,
    StarsComponent,
    ProductComponent,
    ProductDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule, // 响应式编程的支持模块
    RouterModule.forRoot(routeConfig) // 注入路由配置(主模块)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
