import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { CounterComponent } from './counter/counter.component';
import { from } from 'rxjs';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module';

import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { FilmsComponent } from './films/films.component';
import { ColorDirective } from './directives/color.directive';
import { MyTimePipe } from './pipes/my_time.pipe';
import { RegistersComponent } from './registers/registers.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CounterComponent,
    UsersComponent,
    UserDialogComponent,
    FilmsComponent,
    ColorDirective,
    MyTimePipe,
    RegistersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    TextFieldModule,
    MatCardModule,
    MatDialogModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
