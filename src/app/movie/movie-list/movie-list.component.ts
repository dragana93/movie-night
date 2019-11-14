import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "../models/movie.module";
import { MovieService } from "src/app/services/movie.service";
import { NavbarService } from "src/app/services/navbar.service";
import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate
} from "@angular/animations";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"],
  animations: [
    trigger("listAnimation", [
      transition("* <=> *", [
        query(
          ":enter",
          [
            style({ opacity: 0, transform: "translateY(-50px)" }),
            stagger(
              "50ms",
              animate(
                "500ms ease-in",
                style({ opacity: 1, transform: "translateY(0px)" })
              )
            )
          ],
          { optional: true }
        ),
        query(
          ":leave",
          [
            animate("500ms", style({ opacity: 0, transform: "rotate(90deg) " }))
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class MovieListComponent implements OnInit {
  movies$: Observable<Movie[]>;
  loadingMovies: Array<Number>;

  constructor(
    private movieService: MovieService,
    private navbarService: NavbarService
  ) {}

  ngOnInit() {
    this.loadingMovies = new Array(12).fill(0).map((n, index) => index);

    this.movies$ = this.movieService.getMoviesFromHttp();
    this.navbarService.title.next("Movie Night");
  }
}
