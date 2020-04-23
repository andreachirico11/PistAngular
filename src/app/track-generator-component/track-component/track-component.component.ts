import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, OnDestroy, ComponentRef, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrackService } from '../track-actions.service';
import { Piece } from './piece';
import { SvgEnvelopeComponet as SvgEnvelopeComponent } from "../track-component/svgEnvelopeComponent/svgEnvelopeComponent";


@Component({
  selector: 'app-track-component',
  templateUrl: './track-component.component.html'
})
export class TrackComponentComponent implements OnInit, OnDestroy  {

  @ViewChild("startPosition", { read: ViewContainerRef }) startPosition;
  selectedPiece: ComponentRef<SvgEnvelopeComponent>;
  public createSubj: Subscription;

  constructor(
    private compFactory: ComponentFactoryResolver,
    private trackService: TrackService
  ) {}

  ngOnInit() {
    this.createSubj = this.trackService.createdObjectSubj.subscribe(
      (newPiece: Piece) => {
        this.createAndAddNewElement(newPiece);
      }
    );
  }

  ngOnDestroy() {
    this.createSubj.unsubscribe();
  }


  createAndAddNewElement(newPiece: Piece) {
    const factory = this.compFactory.resolveComponentFactory(
      SvgEnvelopeComponent
    );
    this.selectedPiece = this.startPosition.createComponent(factory);
    this.selectedPiece.instance.pieceData = newPiece;
  }

}
