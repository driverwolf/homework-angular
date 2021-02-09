import { RegistersComponent } from './registers/registers.component';
import { FilmsComponent } from './films/films.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { TodoComponent } from './todo/todo.component';
const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'todo',
    component: TodoComponent,
  },
  {
    path: 'films',
    component: FilmsComponent,
  },
  {
    path: 'registers',
    component: RegistersComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
