import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BASE_URL = 'https://tr360-frontend-exam-april.azurewebsites.net/Ha891209/movies';

  constructor(private http: HttpClient) { }


  getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.BASE_URL);
  }

  getMovieList(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.BASE_URL}/${id}`);
  }


  deleteMovie(id: number): Observable<Movie> {
    return this.http.delete<Movie>(`${this.BASE_URL}/${id}`);
  }

}




