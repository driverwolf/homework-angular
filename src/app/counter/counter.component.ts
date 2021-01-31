import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  staticItems: any[] = [
    { title: 'Clear Home', status: 'In Progress' },
    { title: 'Make HW', status: 'In Progress' },
    { title: 'Sleep well', status: 'In Progress' },
  ];
  items: any[] = this.staticItems.slice(0);

  forFind: string;
  constructor() {}

  ngOnInit(): void {}

  finding() {
    this.items = [];
    this.staticItems.forEach((element, index) => {
      if (element.title.toLowerCase().includes(this.forFind.toLowerCase()))
        this.items.push(element);
    });
  }

  changeStatus(value) {
    value.status = value.status === 'In Progress' ? 'Done' : 'In Progress';
  }

  remove(i) {
    this.items.splice(i, 1);
    this.staticItems.splice(i, 1);
  }
}
