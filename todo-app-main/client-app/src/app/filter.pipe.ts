import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './to-do/to-do.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Item[], type: 'all' | 'active' | 'completed'): Item[] {
    let filteredItem: Item[] = []
    if (type == 'completed') {
      return items.filter(i => i.isCompleted == true)
    }
    if (type == 'active') {
      return items.filter(i => i.isCompleted == false)
    }
    return items;
  }

}
