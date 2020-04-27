import { EventEmitter, Component, Output } from "@angular/core";
import { TrackService } from "../../shared/track-actions.service";
import { Parts } from "../../shared/partsEnum";

@Component({
  selector: "app-actions-component",
  templateUrl: "./actions-component.component.html",
})
export class ActionsComponentComponent {
  constructor(private trackService: TrackService) {}

  // public selectedValue = "straight";
  public selectedValue = "1";
  @Output() create = new EventEmitter();
  @Output() doneEv = new EventEmitter();

  move(movType: number) {
    this.trackService.move(movType);
  }

  turn() {
    this.trackService.rotate();
  }

  createAndAddNewElement() {
    this.trackService.createNewPiece(
      this.selectedValue === "1" ? Parts.Straight : Parts.Corner
    );
  }

  done() {
    this.doneEv.emit();
    this.trackService.done();
  }

  delete() {
    this.trackService.deleteComponent();
  }
}
