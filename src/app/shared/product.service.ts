import {EventEmitter, Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  searchEvent: EventEmitter<ProductSearchParams> = new EventEmitter();

  constructor(private http: Http) {
  }

  // 返回所有分类信息，给下拉选
  getAllCategories(): string[] {
    return ['电子产品', '硬件设备', '图书'];
  }

  getProducts(): Observable<Product []> {
    return this.http.get('/api/products').map(res => res.json());
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get('/api/product/' + id).map(res => res.json());
  }

  getCommentsForProductId(id: number): Observable<Comment []> {
    return this.http.get('/api/product/' + id + '/comments').map(res => res.json());
  }

  search(params: ProductSearchParams): Observable<Product []> {
    // 查看HTTP类的get方法， 接收的第二个参数必须是URLSearchParams类型，
    // 所以这里有一个加工参数的方法encodeParams
    return this.http.get('/api/products', {search: this.encodeParams(params)}).map(res => res.json());
  }

  /**注意：URLSearchParams有好几个，这里用的是
   * node_modules\@angular\http\src\url_search_params.d.ts这里的，最好是要import，
   * 不然达不到效果
   * */
  private encodeParams(params: ProductSearchParams) {
    return Object.keys(params)
      .filter(key => params[key]) // 过滤掉空的参数
      .reduce((sum: URLSearchParams, key: string) => { // 将过滤后剩下的装入sum对象中返回
        sum.append(key, params[key]);
        return sum;
      }, new URLSearchParams());
  }

}

export class ProductSearchParams {
  constructor(public title: string,
              public price: number,
              public category: string) {

  }
}


export class Product {
  // 定义一个对象，存放产品信息，在构造函数中声明产品所拥有的属性
  constructor(public id: number, // 主键
              public title: string, // 标题
              public price: number, // 价格
              public rating: number, // 评分
              public desc: string, // 描述
              public categories: Array<string> // 类别
  ) {

  }
}

export class Comment {
  // 定义一个对象，存放评论信息，在构造函数中声明评论所拥有的属性
  constructor(public id: number,
              public productId: number, // 产品id
              public timestamp: string, // 评论时间
              public user: string, // 用户名
              public rating: number, // 评分
              public content: string // 评论内容
  ) {

  }
}




