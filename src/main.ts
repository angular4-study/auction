//关闭angular的开发者模式
import { enableProdMode } from '@angular/core';

//告诉angular使用哪个模块来启动应用
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//导入appmodule
import { AppModule } from './app/app.module';

//导入环境配置
import { environment } from './environments/environment';

//如果是生产环境，就关闭开发者模式
if (environment.production) {
  enableProdMode();
}

//传入appmodule来启动应用，是整个应用的起点
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
