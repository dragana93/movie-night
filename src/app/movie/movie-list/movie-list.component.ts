import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "../models/movie.module";
import { MovieService } from "src/app/services/movie.service";
import { NavbarService } from "src/app/services/navbar.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  movies$: Observable<Movie[]>;

  constructor(
    private movieService: MovieService,
    private navbarService: NavbarService
  ) {}

  ngOnInit() {
    this.movies$ = this.movieService.getMoviesFromHttp();
    this.navbarService.title.next("Movie Night");
  }
}
