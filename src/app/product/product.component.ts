import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // 声明一个数组，存储页面上将要展示的商品的数据
  private products: Product [];

  private imgUrl = 'http://via.placeholder.com/320x150';

  constructor(private productServices: ProductService) {
  }

  ngOnInit() {
    this.products = this.productServices.getProducts();
  }

}


