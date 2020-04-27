import { Component } from '@angular/core';
import { Parts } from '../../../shared/partsEnum';

@Component({
  selector: "svg-Parts",
  templateUrl: "./svgPart.component.html"
})

export class SvgPartComponent {
  public part1 = Parts.Straight;
  public part2 = Parts.Corner;
}
