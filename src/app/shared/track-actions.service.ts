import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { TrackTrasformationsService } from "../track-generator-component/track-transformations.service";
import { Piece } from "./piece";
import { DbService } from "./db.service";

@Injectable({ providedIn: "root" })
export class TrackService {
  public createdObj: Piece = null;
  public createdObjectSubj = new Subject();
  public clearSub = new Subject();

  constructor(
    private transService: TrackTrasformationsService,
    private dbService: DbService
  ) {}

  drawNewObj() {
    this.createdObjectSubj.next(this.createdObj);
  }

  createNewPiece(selected: string) {
    this.done();
    const newId = this.dbService.generateNewId(selected);
    this.createdObj = new Piece(
      newId,
      0,
      0,
      "rotate(0,50,50)",
      selected,
      "red"
    );
    this.drawNewObj();
  }

  done() {
    if (this.createdObj) {
      this.createdObj.stroke = "black";
      this.drawNewObj();
      this.dbService.addPiece(this.createdObj);
      this.createdObj = null;
      this.drawNewObj();
    }
  }

  move(dir: number) {
    if (this.createdObj) {
      const newCoo = this.transService.move(dir, this.createdObj);
      if (newCoo) {
        this.createdObj = newCoo;
        this.drawNewObj();
      }
    }
  }

  rotate() {
    if (this.createdObj) {
      this.createdObj.rotation = this.transService.rotate(this.createdObj);
      this.drawNewObj();
    }
  }

  save(trackName: string) {
    this.done();
    return this.dbService.saveNewTrack(trackName);
  }

  load(trackName: string) {
    this.clear();
    this.dbService.getTrackByName(trackName).subscribe((res: Piece[]) => {

      res.forEach((piece: Piece) => {
        this.createdObj = piece;
        this.drawNewObj();
        this.createdObj = null;
        this.drawNewObj();
      });

    });
  }

  enterUpdateMode(pieceToUpdate: Piece) {
    this.done();
    this.dbService.findAndRemovePiece(pieceToUpdate);
    pieceToUpdate.stroke = "red";
    this.createdObj = pieceToUpdate;
    this.drawNewObj();
  }

  deleteComponent() {
    this.dbService.findAndRemovePiece(this.createdObj);
    this.createdObj = undefined;
    this.drawNewObj();
    this.createdObj = null;
  }

  clear() {
    this.dbService.clearDb();
    this.createdObj = null;
    this.clearSub.next();
  }
}
