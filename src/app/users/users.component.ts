import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from '../services/users.service';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

export interface DialogData {
  users: object;
  index: number;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  constructor(public dialog: MatDialog, public userservice: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.userservice.getUsers().subscribe((res: any[]) => {
      this.users = res;
    });
  }

  openDialog(i) {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      height: '400px',
      width: '600px',
      data: { users: this.users, index: i },
    });

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}
