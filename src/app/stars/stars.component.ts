import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  // 装饰器：声明rating这个属性应该由父组件传递过来
  @Input()
  private rating = 0;
  @Output() // 向外发射
  private ratingChange: EventEmitter<number> = new EventEmitter();

  private stars: boolean[];

  @Input()
  private readonly = true;

  constructor() {
  }

  ngOnInit() {

  }

  clickStar(index: number) {
    if (!this.readonly) {
      this.rating = index + 1;
      // this.ngOnInit();
      this.ratingChange.emit(this.rating);
    }
  }

  ngOnChanges() {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
    // this.stars = [false , false , true , true , true];
  }

}
