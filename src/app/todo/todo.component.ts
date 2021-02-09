import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { TodosService } from './../services/todos.service';
import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { element } from 'protractor';

export interface TodoData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  todos: MatTableDataSource<TodoData>;
  todosArray: any[] = [];
  value: string;
  shower: boolean = false;
  index: number;
  displayedColumns: string[] = ['id', 'title', 'userId', 'completed'];
  btns: string[] = ['Edit', 'Delete'];
  columnsToDisplay: string[] = this.displayedColumns.concat(this.btns);
  constructor(public todoservice: TodosService) {}

  ngOnInit() {
    this.getTodos();
  }
  getTodos() {
    this.todoservice.getTodos().subscribe((res: any[]) => {
      this.todosArray = res;
      this.todos = new MatTableDataSource(res);
      this.todos.paginator = this.paginator;
      this.todos.sort = this.sort;
    });
  }

  changeStatus(todo): void {
    todo.completed = !todo.completed;
  }

  editor(title, todo): void {
    this.value = title;
    this.shower = true;
    this.index = this.todosArray.indexOf(todo);
  }
  deletor(todo): void {
    this.todosArray.splice(this.todosArray.indexOf(todo), 1);
    this.todos = new MatTableDataSource(this.todosArray);
    this.todos.paginator = this.paginator;
    this.todos.sort = this.sort;
    this.table.renderRows();
  }
  saver(): void {
    this.shower = false;
    this.todosArray[this.index].title = this.value;
    this.todos = new MatTableDataSource(this.todosArray);
    this.todos.paginator = this.paginator;
    this.todos.sort = this.sort;
  }
}
