import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  constructor(private http: HttpClient) {}
  getFilms(title): Observable<any[]> {
    return this.http.get<any[]>(
      `http://www.omdbapi.com/?t=${title}&apikey=80cd4a4e`
    );
  }
}
