import { Component, Input } from "@angular/core";
import { Piece } from "../piece";

@Component({
  selector: "svg[envelope]",
  templateUrl: "./svgEnvelopeComponent.html",
})
export class SvgEnvelopeComponet {
  public strokeWidth = "5";

  @Input() pieceData: Piece;

  get absUrl(): string {
    const url = window.location.href;
    return url;
  }
}
