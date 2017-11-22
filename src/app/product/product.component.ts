import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from '../shared/product.service';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import {Observable} from "rxjs/Observable"; // import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // 声明一个数组，存储页面上将要展示的商品的数据
  private products: Observable<Product []>;

  private keyWord: string;

  private titleFilter: FormControl = new FormControl();

  private imgUrl = 'http://via.placeholder.com/320x150';

  constructor(private productServices: ProductService) {
    /*this.titleFilter.valueChanges
      .debounceTime(500)
      .subscribe(
        value => this.keyWord = value
      );*/
  }

  ngOnInit() {
    this.products = this.productServices.getProducts();

    this.productServices.searchEvent.subscribe(
      params => this.products = this.productServices.search(params)
    );
  }

}


