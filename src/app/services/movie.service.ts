import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { movies } from "../movie/models/movie.module";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  constructor() {}

  getMovies() {
    return of(movies);
  }

  movie(id: number) {
    return of(movies.find(movie => +movie.id === +id));
  }
}