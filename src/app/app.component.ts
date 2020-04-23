import {
  Component,
  ViewChild,
  AfterViewChecked,
  AfterViewInit,
  ComponentFactoryResolver,
  ElementRef,
  ViewContainerRef,
  Renderer2,
  ComponentRef,
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { PieceNames } from "./pieceNames";
import { SvgEnvelopeComponet as SvgEnvelopeComponent } from "./svgEnvelopeComponent/svgEnvelopeComponent";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("selection", { static: true }) selectionRadioForm: NgForm;
  @ViewChild("mainBoard", { read: ViewContainerRef }) mainSVG;
  @ViewChild("startPosition", { read: ViewContainerRef }) startPosition;
  public selectedValue = "straight";
  createdPieceHighlightEvent: Subscription;
  selectedPiece: ComponentRef<SvgEnvelopeComponent>;

  createdComponentsArray = [];

  constructor(private compFactory: ComponentFactoryResolver) {}

  createAndAddNewElement() {
    this.done();
    const factory = this.compFactory.resolveComponentFactory(
      SvgEnvelopeComponent
    );
    factory;
    this.selectedPiece = this.startPosition.createComponent(factory);
    this.selectedPiece.instance.stroke = "red";

    this.selectedPiece.instance.pieceName = this.selectedValue;
  }

  move(dir: number) {
    if (this.selectedPiece) {
      switch (dir) {
        case 1:
          if (this.selectedPiece.instance.x < 1300) {
            this.selectedPiece.instance.x += 100;
          }
          break;
        case 2:
          if (this.selectedPiece.instance.x > 100) {
            this.selectedPiece.instance.x -= 100;
          }
          break;
        case 3:
          if (this.selectedPiece.instance.y < 900) {
            this.selectedPiece.instance.y += 100;
          }
          break;
        case 4:
          if (this.selectedPiece.instance.y > 100) {
            this.selectedPiece.instance.y -= 100;
          }
          break;
        default:
          break;
      }
    }
  }

  rotate() {
    let prevRotation = this.selectedPiece.instance.rotation;
    if (this.selectedPiece) {
      switch (prevRotation) {
        case "rotate(0,50,50)":
          prevRotation = "rotate(90,50,50)";
          break;
        case "rotate(90,50,50)":
          prevRotation = "rotate(180,50,50)";
          break;
        case "rotate(180,50,50)":
          prevRotation = "rotate(270,50,50)";
          break;
        case "rotate(270,50,50)":
          prevRotation = "rotate(0,50,50)";
          break;
        default:
          console.log("default");
          break;
      }
    }
    this.selectedPiece.instance.rotation = prevRotation;
  }

  done() {
    if (this.selectedPiece) {
      this.selectedPiece.instance.stroke = "black";
      this.selectedPiece = null;
    }
  }
}
