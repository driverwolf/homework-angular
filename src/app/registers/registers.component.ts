import { MatTableDataSource, MatTable } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

// export interface DataUsers {
//   id: number;
//   login: string;
//   password: string;
//   email: string;
// }
@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.scss'],
})
export class RegistersComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<any>;
  dataColumns: string[] = ['login', 'password', 'email'];
  displayedColumns: string[] = this.dataColumns.concat(['Edit', 'Delete']);
  // registers: MatTableDataSource<DataUsers>;
  registersArray: any[] = [];
  login: string;
  password: string;
  email: string;
  shower: boolean = true;
  indexForEdit: number;
  constructor() {}

  ngOnInit(): void {
    this.displayedColumns.unshift('Id');
  }
  add() {
    console.log(this.login, this.email, this.password);

    this.registersArray.push({
      login: this.login,
      password: this.password,
      email: this.email,
    });
    this.login = undefined;
    this.password = undefined;
    this.email = undefined;

    this.table.renderRows();
  }
  edit(i) {
    this.shower = false;
    this.indexForEdit = i;
    this.login = this.registersArray[i].login;
    this.password = this.registersArray[i].password;
    this.email = this.registersArray[i].email;
  }
  editor() {
    this.shower = true;
    this.registersArray[this.indexForEdit].login = this.login;
    this.registersArray[this.indexForEdit].password = this.password;
    this.registersArray[this.indexForEdit].email = this.email;
    this.login = undefined;
    this.password = undefined;
    this.email = undefined;
  }
  delete(i) {
    this.registersArray.splice(i, 1);
    this.table.renderRows();
  }
}
