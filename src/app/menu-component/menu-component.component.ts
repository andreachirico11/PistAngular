import { Component, OnInit } from "@angular/core";
import { DbService } from "../shared/db.service";
import { TrackService } from "../shared/track-actions.service";

@Component({
  selector: "app-menu-component",
  templateUrl: "./menu-component.component.html",
})
export class MenuComponentComponent implements OnInit {
  public isCollapsed = true;
  public newName: string = null;
  public loadedTrackList: string[] = [];

  constructor(
    private dbService: DbService,
    private trackService: TrackService
  ) {}

  ngOnInit(): void {
    this.dbService
      .getList()
      .subscribe(() => (this.loadedTrackList = this.dbService.localNameList));
  }

  saveTrack() {
    if (this.newName != null) {
      this.trackService.save(this.newName).subscribe();
    }
    this.newName = null;
  }

  loadTrack(trackName: string) {
    this.trackService.load(trackName);
  }

  clearTrack() {
    this.trackService.clear();
  }
}
