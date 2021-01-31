import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  value: number = 4;
  constructor() {}

  ngOnInit(): void {}

  sum() {
    this.value++;
  }
  diff() {
    this.value--;
  }
}
