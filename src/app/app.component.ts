//从ng的核心模块angular/core里引入了一个叫Component的装饰器
import { Component } from '@angular/core';

/**
 * AppComponent是一个普通的typescript类，通过装饰器附加元数据到typescript类上面
 * ng就知道了，要把它变成一个ng组件
 * 
 * selector：告诉这个组件可以通过app-root'这样一个标签来调用
 * templateUrl： 指定一个html文件作为组件模板
 * styleUrls：指向这个组件模板需要使用到的样式
 */
/**
 * export：定义了这个组件的控制器，它只有一个属性，叫title
 */
//用这个装饰器定义了一个组件，以及组件的元数据
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
