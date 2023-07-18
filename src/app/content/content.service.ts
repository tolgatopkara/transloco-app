import { Injectable } from '@angular/core';
import { content } from './content.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  contentList: content[] = [
    {
      title: 'Animal',
      description: 'Lion, Horse, Panda'
    },
    {
      title: 'Fruit',
      description: 'Apple, Banana, Orange'
    },
    {
      title: 'Color',
      description: 'Red, Green, Blue'
    },
    {
      title: 'Number',
      description: 'One, Two, Three'
    },
    {
      title: 'Country',
      description: 'Turkey, Japan, China'
    },
    {
      title: 'Home Appliance',
      description: 'Television, Refrigerator, Washing Machine'
    },


  ]
  getContentList() {
    return this.contentList;
  }
}
