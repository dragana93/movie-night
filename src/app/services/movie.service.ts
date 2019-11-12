import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Movie } from "../movie/models/movie.module";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  private ROOT_URL = "http://localhost:3000/movies";

  constructor(private http: HttpClient) {}

  getMoviesFromHttp() {
    return this.http.get<Movie[]>(this.ROOT_URL);
  }

  movieFromHttp(id: number) {
    return this.http.get<Movie>(`${this.ROOT_URL}/${id}`);
  }

  addMovie(movie: Movie) {
    return this.http.post(this.ROOT_URL, movie);
  }

  // getMovies() {
  //   return of(movies);
  // }

  // movie(id: number) {
  //   return of(movies.find(movie => +movie.id === +id));
  // }
}
