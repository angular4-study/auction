import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Comment, Product, ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  comments: Comment [];

  newRating = 5; // 可变评论，默认5星
  newComment = '';

  isCommentHidden = true; // “增加评论” 是否显示

  constructor(private routeInfo: ActivatedRoute,
              private productService: ProductService) {
  }

  ngOnInit() {
    const productId: number = this.routeInfo.snapshot.params['productId'];
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsForProductId(productId);
  }

  addComment() {
    const commentObj = new Comment(0, this.product.id, new Date().toISOString(), '某人', this.newRating, this.newComment);
    this.comments.unshift(commentObj);

    // reduce(回调函数，初始值),即 0 + 每个item
    const sumRating = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    this.product.rating = sumRating / this.comments.length;

    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;
  }

}
