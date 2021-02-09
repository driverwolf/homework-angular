import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent implements OnInit {
  films: any[] = [];
  constructor(public filmservice: FilmsService) {}
  title: string;
  ngOnInit(): void {}
  getFilms() {
    this.filmservice.getFilms(this.title).subscribe((res: any[]) => {
      this.films.push(res);
      console.log(res);
    });
  }
  search() {
    this.getFilms();
  }
}
