import { Component, OnInit } from '@angular/core';
import {isNumber} from "util";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  //声明一个数组，存储页面上将要展示的商品的数据
  private products: Array<Product>;

  private  imgUrl = "http://via.placeholder.com/320x150";

  constructor() { }

  //生命周期钩子之一，在组件被实例化之后，调用一次，用来初始化数据
  ngOnInit() {
    this.products = [
      new Product(1,"第一个商品",1.99,3.5,"这是商品的第一个描述，是我在学习慕课网angular入门实战时创建的",["电子产品","硬件设备"]),
      new Product(2,"第二个商品",2.99,2.5,"这是商品的第二个描述，是我在学习慕课网angular入门实战时创建的",["图书"]),
      new Product(3,"第三个商品",3.99,4.5,"这是商品的第三个描述，是我在学习慕课网angular入门实战时创建的",["硬件设备"]),
      new Product(4,"第四个商品",4.99,1.5,"这是商品的第四个描述，是我在学习慕课网angular入门实战时创建的",["电子产品","硬件设备"]),
      new Product(5,"第五个商品",5.99,3.5,"这是商品的第五个描述，是我在学习慕课网angular入门实战时创建的",["电子产品"]),
      new Product(6,"第六个商品",6.99,2.5,"这是商品的第六个描述，是我在学习慕课网angular入门实战时创建的",["图书"])
    ]
  }

}

export  class Product{
  //定义一个对象，存放产品信息，在构造函数中声明产品所拥有的属性
  constructor(
    public id:number,//主键
    public title:string,//标题
    public price:number,//价格
    public rating:number,//评分
    public desc:string,//描述
    public categories:Array<string> //类别
  ){

  }
}
