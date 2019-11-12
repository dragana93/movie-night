import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NavbarService } from "src/app/services/navbar.service";
import { MovieService } from "src/app/services/movie.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-movie",
  templateUrl: "./add-movie.component.html",
  styleUrls: ["./add-movie.component.css"]
})
export class AddMovieComponent implements OnInit {
  movieForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    genre: new FormControl("", [Validators.required]),
    image: new FormControl("", [Validators.required]),
    releaseYear: new FormControl("", [Validators.required])
  });

  constructor(
    private router: Router,
    private movieService: MovieService,
    private navbarService: NavbarService
  ) {}

  ngOnInit() {
    this.navbarService.title.next("Add movie");
  }

  addMovie() {
    if (this.movieForm.valid) {
      this.movieService.addMovie(this.movieForm.value).subscribe(res => {
        this.movieForm.reset();
        this.router.navigate(["/"]);
      });
    }
  }
}
