import { Component, OnInit } from "@angular/core";
import { NavbarService } from "../services/navbar.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  title$ = this.navbarServce.title;

  constructor(private navbarServce: NavbarService) {}

  ngOnInit() {}
}
