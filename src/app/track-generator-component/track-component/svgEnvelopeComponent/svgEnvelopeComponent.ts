import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Piece } from "../piece";

@Component({
  selector: "svg[envelope]",
  templateUrl: "./svgEnvelopeComponent.html",
})
export class SvgEnvelopeComponet {
  public strokeWidth = "5";

  @Output() highlightEv = new EventEmitter<Piece>();
  @Input() pieceData: Piece;

  get absUrl(): string {
    const url = window.location.href;
    return url;
  }

  highlightMe() {
    this.highlightEv.emit(this.pieceData);
  }
}
