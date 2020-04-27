import { Component, Input, Output, EventEmitter, ComponentRef } from "@angular/core";
import { Piece } from "../../../shared/piece";

@Component({
  selector: "svg[envelope]",
  templateUrl: "./svgEnvelopeComponent.html",
})
export class SvgEnvelopeComponet {
  public strokeWidth = "5";
  @Input() selfRef: ComponentRef<SvgEnvelopeComponet>;

  @Output() highlightEv = new EventEmitter<ComponentRef<SvgEnvelopeComponet>>();
  @Input() pieceData: Piece;

  get absUrl(): string {
    const url = window.location.href;
    return url;
  }

  highlightMe() {
    this.highlightEv.emit(this.selfRef);
  }
}
