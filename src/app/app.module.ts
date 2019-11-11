import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NavbarService } from "./services/navbar.service";
import { MovieService } from "./services/movie.service";

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [NavbarService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
