import { animate, query, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
export interface Item {
  text: string;
  isCompleted: boolean;
}
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
  animations: [

    trigger('addDelete', [
      transition(':leave', [
        style({
           opacity: 1
          }),
        animate('.3s', 
        style({
           'height':'0',
           'transform':'translateX(100px)',
           opacity: 0 
          }))
      ]),
      transition(':enter', [
        style({
           opacity: 0, 
           height:0,
           'transform':'translateX(-100px)',
           }),
        animate('.3s', style({ 
          opacity: 1,
          height:'57px',
          'transform':'translateX(0)',
        }))

      ]),
      transition('* => *',[
        style({
          opacity: 0, 
          height:0,
          'transform':'translateX(-100px)',
          }),
       animate('.3s', style({ 
         opacity: 1,
         height:'57px',
         'transform':'translateX(0)',
       }))
      ])

    ])


  ]
})
export class ToDoComponent implements OnInit {

  constructor() { }
  newItem: string = '';
  filterType: 'all' | 'active' | 'completed' = 'all'
  isNight: boolean = true;
  changeThemeBtnUrl = '../../assets/images/icon-moon.svg'
  todoItems: Item[] = [
    { text: "Complete online java script course", isCompleted: false },
    { text: "Jod around the park 3x", isCompleted: false },
    { text: "10 minutes mediation", isCompleted: false },
    { text: "Read for 1 hour", isCompleted: false },
    { text: "Pick up groceries", isCompleted: false },
    { text: "Complete ToDo app for FrontendMentor", isCompleted: false },
  ]
  ngOnInit(): void {
  }
  check(item: Item) {
    let index = this.todoItems.indexOf(item);
    if(index != undefined || index != -1)
    this.todoItems[index].isCompleted = !this.todoItems[index].isCompleted;
  }
  addItem() {
    if(this.newItem != '')
      this.todoItems.push({ text: this.newItem, isCompleted: false })
    this.newItem = '';
  }
  deleteItem(item: Item) {
    let index = this.todoItems.indexOf(item);
    if(index != undefined || index != -1)
      this.todoItems.splice(index, 1);
  }
  clearCompleted() {
    for (let i = 0; i < this.todoItems.length; i++) {
      if (this.todoItems[i].isCompleted == true) {
        this.todoItems.splice(i, 1);
        i = -1;
      }

    }
  }
  changeTheme() {
    this.isNight = !this.isNight;
    this.changeThemeBtnUrl = '../../assets/images/icon-' + (this.isNight ? 'moon' : 'sun').toString() + '.svg'
  }

}
