import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { TrackTrasformationsService } from "./track-transformations.service";
import { Piece } from "./track-component/piece";

@Injectable({ providedIn: "root" })
export class TrackService {
  public createdObj: Piece = null;
  public createdObjectSubj = new Subject();

  constructor(private transService: TrackTrasformationsService) {}

  drawNewObj() {
    this.createdObjectSubj.next(this.createdObj);
  }

  createNewPiece(selected: string) {
    this.done();
    this.createdObj = new Piece(0, 0, "rotate(0,50,50)", selected, "red");
    this.createdObj.type = selected;
    this.drawNewObj();
  }

  move(dir: number) {
    const newCoo = this.transService.move(dir, this.createdObj);
    if (newCoo) {
      this.createdObj = newCoo;
      this.drawNewObj();
    }
  }

  rotate() {
    this.createdObj.rotation = this.transService.rotate(this.createdObj);
    this.drawNewObj();
  }

  done() {
    if (this.createdObj) {
      this.createdObj.stroke = "black";
      this.drawNewObj();
      this.createdObj = null;
    }
  }
}
