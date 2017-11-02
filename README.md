- npm install -g @angular/cli #安装angular命令行工具
- ng -v # 查看安装成功版本
- ng new auction # 在当前目录快速创建一个叫auction的项目

- 在github创建一个auction同名仓库
- git remote add origin git@github.com:dingziyang/auction.git # 关联远程仓库
- git fetch --all # 取出所有
- git push --force origin master # 强行push到远程master



## 文件目录详解：
- []e2e: 做自动化测试的
- angular-cli.json : angular命令行工具配置文件
- karma.conf.js : 一个单元测试执行器的配置文件，做自动化测试的
- package.json : 一个标准的npm配置文件，(应用所使用的第三方依赖包)
- protractor.conf.js : 用来做自动化测试的配置文件
- tslint.json : 是tslint的配置文件，用来定义typescript代码质量检查规则

- []src: 应用源代码目录
	- []app ： 应用程序源码所在地
		- app.component.ts : 是整个应用的基础，就像房子的地基
	- []assets: 用来存放静态资源
	- []environments : 环境配置(开发，生产，测试)
	- index.html : 整个页面的根页面
	- main.ts ： 整个web应用的入口点，脚本执行的入口点，angualr通过执行这个文件来启动项目
	- polyfills.ts : 用来导入必要库，是angular可以正常运行在某些老版本浏览器上
	- styles.css : 存放整个应用全局的样式
	- test.ts : 用来做自动化测试的
	- tsconfig.json : 是typescript编译器的配置，不用改


## 1.安装第三方插件
- 在项目目录下，npm install jquery --save # --save是要把这个依赖记到当前npm的package.json文件中
- npm install bootstrap --save

## 2.引入第三方插件
- 在angular-cli.json 中，找到apps下面的styles和scripts，将jquery和botstrap对应的js和css写进去
- npm install @types/jquery --save-dev # 装jquery的typescript的类型描述文件，是让typescript认识jquery的代码
- npm install @types/bootstrap --save-dev # 装bootstrap的typescript的类型描述文件，是让typescript认识bootstrap的代码

## 3.使用angular命令行工具，生成组件
- ng g component myname
- 上面的命令会在app目录下创建 myname的文件夹，里面有4个文件，然后会更新app.moudle.ts 里面的模块组件配置

# Auction

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
