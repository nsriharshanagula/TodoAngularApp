import { Component, OnInit } from '@angular/core';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-listtodos',
  templateUrl: './listtodos.component.html',
  styleUrls: ['./listtodos.component.css']
})
export class ListtodosComponent implements OnInit {
  todos =[
    new Todo(1, 'Learn to dance', false, new Date()),
    new Todo(2, 'Learn to rock', false, new Date()),
    new Todo(3, 'Learn to smile', false, new Date())
  ];

  constructor() { }

  ngOnInit() {
  }

}
