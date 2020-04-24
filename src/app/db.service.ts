import { Injectable } from "@angular/core";
import { Piece } from "./track-generator-component/track-component/piece";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { take, mergeMap, switchMap, concatMap, tap, filter, map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class DbService {
  public localTrack: Piece[] = [];
  public localNameList: string[] = [];

  private headers = new HttpHeaders({
    "Content-Type": "application/json",
  });
  private url = "http://localhost:3000/db";
  private urlNameList = "http://localhost:3000/nameList/1";

  constructor(private http: HttpClient) {}


  getList() {
    return this.http.get(this.urlNameList).pipe(
      take(1),
      tap((res: {list: []}) => this.localNameList = res.list)
    );
  }

  addPiece(newPiece: Piece) {
    this.localTrack.push(newPiece);
  }

  updateNameList(trackName: string) {
    this.localNameList.push(trackName);
    const strToSend = {
      "list": this.localNameList
    };
    return this.http.patch(this.urlNameList,strToSend);
  }

  saveNewTrack(trackName: string) {
    return this.http
      .post(
        this.url,
        { [trackName]: this.localTrack },
        { headers: this.headers }
      )
      .pipe(
        switchMap(() => this.updateNameList(trackName))
      );
  }

  getTrackByName(trackName: string) {
    const trackId = (this.localNameList.findIndex(name => name === trackName)) + 1;
    return this.http.get(this.url + '/' + trackId).pipe(
      take(1),
      map(res => res[trackName]),
      tap((res: Piece[]) => this.localTrack = res)
      );
  }
}
