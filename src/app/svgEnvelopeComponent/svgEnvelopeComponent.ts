import { Component, Input } from "@angular/core";

@Component({
  selector: "svg[envelope]",
  templateUrl: "./svgEnvelopeComponent.html",
})
export class SvgEnvelopeComponet {
  @Input() pieceName
  @Input() x = 0;
  @Input() y = 0;
  @Input() stroke = "black";
  @Input() strokeWidth = "5";
  @Input() rotation = "rotate(0,50,50)";



  get absUrl() : string {
    const url =  window.location.href;
    return url;
  }

}
