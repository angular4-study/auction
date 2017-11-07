import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  // 装饰器：声明rating这个属性应该由父组件传递过来
  @Input()
  private rating: number = 0;

  private stars: boolean[];

  constructor() { }

  ngOnInit() {
    this.stars = [];
    for (let i = 1; i <= 5;  i++){
      this.stars.push(i > this.rating);
    }
    // this.stars = [false , false , true , true , true];
  }

}
