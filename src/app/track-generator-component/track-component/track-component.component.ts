import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  OnDestroy,
  ComponentRef,
  OnInit,
} from "@angular/core";
import { Subscription } from "rxjs";
import { TrackService } from "../../shared/track-actions.service";
import { Piece } from "../../shared/piece";
import {
  SvgEnvelopeComponet as SvgEnvelopeComponent,
  SvgEnvelopeComponet,
} from "../track-component/svgEnvelopeComponent/svgEnvelopeComponent";

@Component({
  selector: "app-track-component",
  templateUrl: "./track-component.component.html",
})
export class TrackComponentComponent implements OnInit, OnDestroy {
  @ViewChild("startPosition", { read: ViewContainerRef }) startPosition;
  selectedPiece: ComponentRef<SvgEnvelopeComponent>;
  public createSubj: Subscription;
  public highlightSubj: Subscription;
  public clearSubj: Subscription;

  constructor(
    private compFactory: ComponentFactoryResolver,
    private trackService: TrackService
  ) {}

  ngOnInit() {
    this.clearSubj = this.trackService.clearSub.subscribe(() => {
      if (this.highlightSubj) {
        this.highlightSubj.unsubscribe();
      }
      this.startPosition.clear();
    });
    this.createSubj = this.trackService.createdObjectSubj.subscribe(
      (newPiece: Piece) => {
        if (newPiece === null) {
          this.selectedPiece = null;
        } else if (newPiece === undefined) {
          if (this.selectedPiece) {
            this.selectedPiece.destroy();
          }
        } else {
          if (this.selectedPiece) {
            this.selectedPiece.destroy();
            this.createAndAddNewElement(newPiece);
          } else {
            this.createAndAddNewElement(newPiece);
          }
        }
      }
    );
  }

  ngOnDestroy() {
    this.createSubj.unsubscribe();
    this.highlightSubj.unsubscribe();
    this.clearSubj.unsubscribe();
  }

  createAndAddNewElement(newPiece: Piece) {
    const factory = this.compFactory.resolveComponentFactory(
      SvgEnvelopeComponent
    );
    this.selectedPiece = this.startPosition.createComponent(factory);
    this.selectedPiece.instance.pieceData = newPiece;
    this.selectedPiece.instance.selfRef = this.selectedPiece;
    this.highlightSubj = this.selectedPiece.instance.highlightEv.subscribe(
      (res: ComponentRef<SvgEnvelopeComponet>) => {
        this.updatePiece(res);
        this.highlightSubj.unsubscribe();
      }
    );
  }

  updatePiece(ref: ComponentRef<SvgEnvelopeComponet>) {
    this.selectedPiece = ref;
    this.selectedPiece.destroy();
    this.trackService.enterUpdateMode(ref.instance.pieceData);
  }
}
