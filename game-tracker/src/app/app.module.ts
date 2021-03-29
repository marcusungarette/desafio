import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./../modules/material-module";
import { SearchPipe } from "./../pipes/search.pipe";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { GametrackerHomepageComponent } from "../components/gametracker-homepage/gametracker-homepage.component";
import { GametrackerHeaderComponent } from "src/components/gametraker-header/gametracker-header.component";
import { TypeFilterPipe } from "src/pipes/typeFilter.pipe";
import { FooterComponent } from "../components/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GametrackerHeaderComponent,
    SearchPipe,
    TypeFilterPipe,
    GametrackerHomepageComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
