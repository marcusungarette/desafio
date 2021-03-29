import { Component, Input, OnInit, Output } from "@angular/core";
import { EventEmitter } from "events";
import { Gametraker } from "src/interfaces";
import { GametrakerService } from "src/services/gametracker.service";

@Component({
  selector: "app-gametracker-homepage",
  templateUrl: "./gametracker-homepage.component.html",
  styleUrls: ["./gametracker-homepage.component.scss"],
})
export class GametrackerHomepageComponent implements OnInit {
  @Output() exportGameTrackers = new EventEmitter();
  query: string;
  gametrackers: Gametraker[];
  typeFilters: string;

  @Input() set search(newSearch: string) {
    if (newSearch !== this.query) {
      this.query = newSearch;
    }
  }

  @Input() set typeFilter(type: string) {
    if (type !== this.typeFilter) {
      this.typeFilters = type;
    }
  }

  constructor(private gametrackerService: GametrakerService) {}

  ngOnInit(): void {
    this.getGametracker();
  }

  getGametracker(): void {
    this.gametrackerService.getGametracker().subscribe((data: Gametraker[]) => {
      this.gametrackers = data;
      this.gametrackers.forEach((gametracker) => {
        if (gametracker.title.length > 30) {
          gametracker.title = gametracker.title.slice(0, 29) + `...`;
        }
        gametracker.thumb = gametracker.thumb;
        gametracker.normalPrice = `$ ` + gametracker.normalPrice;
        gametracker.salePrice = `$ ` + gametracker.salePrice;
        gametracker.savings = `- ` + gametracker.savings.slice(0, 2) + `%`;
      });
    });
  }
}
