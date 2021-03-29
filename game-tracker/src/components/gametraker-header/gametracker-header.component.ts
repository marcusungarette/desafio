import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";
import { Results } from "src/interfaces";

@Component({
  selector: "app-gametracker-header",
  templateUrl: "./gametracker-header.component.html",
  styleUrls: ["./gametracker-header.component.scss"],
})
export class GametrackerHeaderComponent implements OnInit {
  @Output() searchChange = new EventEmitter();
  @Output() typeSelected = new EventEmitter();

  currentType: string;
  search: string;
  gametrackerList: Array<Results>;

  @Input() set gametrackers(gametrackers: Results[]) {
    if (gametrackers !== this.gametrackerList) {
      this.gametrackerList = gametrackers;
    }
  }

  constructor() {}

  ngOnInit(): void {}

  searchEvent(search): void {
    if (search === "") {
      this.search = search;
    }
    this.searchChange.emit(this.search);
  }

  onTypeSelected(): void {
    if (this.currentType) {
      this.typeSelected.emit(this.currentType);
    } else {
      this.typeSelected.emit("");
    }
  }
}
