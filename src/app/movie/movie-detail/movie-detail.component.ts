import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Movie } from "../models/movie.module";
import { MovieService } from "src/app/services/movie.service";
import { NavbarService } from "src/app/services/navbar.service";

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
    private navbarService: NavbarService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get("id");
    this.movieSub$ = this.movieService.movieFromHttp(this.id).subscribe(x => {
      // console.log(x);
      this.movie = x;
      this.navbarService.title.next(this.movie.name);
    });
  }

  ngOnDestroy() {
    this.movieSub$.unsubscribe();
  }
}
