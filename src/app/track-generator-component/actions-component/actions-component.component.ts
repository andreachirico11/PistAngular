import { EventEmitter, Component, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TrackService } from '../track-actions.service';

@Component({
  selector: 'app-actions-component',
  templateUrl: './actions-component.component.html'
})
export class ActionsComponentComponent {

  constructor(private trackService: TrackService) {}

  public selectedValue = "straight";
  @Output() create = new EventEmitter();
  @Output() doneEv = new EventEmitter();

  move(movType: number) {
    this.trackService.move(movType);
  }

  turn() {
    this.trackService.rotate();
  }

  createAndAddNewElement() {
    this.create.emit(this.selectedValue);
    this.trackService.createNewPiece(this.selectedValue);
  }

  done() {
    this.doneEv.emit();
    this.trackService.done();
  }
}
