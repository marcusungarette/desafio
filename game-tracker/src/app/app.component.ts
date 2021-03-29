import { Component } from "@angular/core";
import { Results } from "src/interfaces";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public gametrackers: Array<Results>;
  public typeFilter: string;
  public search: string;

  newGametrackerSearch(search: string): void {
    if (this.search !== search) {
      this.search = search;
    }
  }

  newTypeSelected(filter: string): void {
    if (this.typeFilter !== filter) {
      this.typeFilter = filter;
    }
  }
  exportGametrackers(gametrackers: Array<Results>): void {
    if (this.gametrackers !== gametrackers) {
      this.gametrackers = gametrackers;
    }
  }
}
