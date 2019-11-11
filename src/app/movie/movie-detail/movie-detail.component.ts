import { Component, OnInit, OnDestroy } from "@angular/core";
import { MovieService } from "../services/movie.service";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Movie } from "../models/movie.module";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.css"]
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  id: number;
  movie: Movie;
  movieSub$: Subscription;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get("id");
    this.movieSub$ = this.movieService.movie(this.id).subscribe(x => {
      console.log(x);
      this.movie = x;
    });
  }

  ngOnDestroy() {
    this.movieSub$.unsubscribe();
  }
}
