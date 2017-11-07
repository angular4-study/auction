import { Pipe, PipeTransform } from '@angular/core';

/**
 * 声明一个管道
 */
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  /**
   *
   * @param {any[]} list 要过滤的集合
   * @param {string} filterField 指定过滤的字段
   * @param {string} keyWord 过滤关键字
   * @returns {any}
   */
  transform(list: any[], filterField: string, keyWord: string): any {
    if (!filterField || !keyWord) {
      return list;
    }
    return list.filter( item => {
      let fieldValue = item[filterField];
      return fieldValue.indexOf(keyWord) >= 0;
    });
  }

}
