import { Injectable } from '@angular/core';
import { Piece } from './track-component/piece';

@Injectable({providedIn: "root"})

export class TrackTrasformationsService {

  move(dir: number, movementObj: Piece) {
    switch (dir) {
      case 1:
        if (movementObj.x < 1300) {
          movementObj.x += 100;
        }
        break;
      case 2:
        if (movementObj.x >= 100) {
          movementObj.x -= 100;
        }
        break;
      case 3:
        if (movementObj.y < 900) {
          movementObj.y += 100;
        }
        break;
      case 4:
        if (movementObj.y >= 100) {
          movementObj.y -= 100;
        }
        break;
      default:
        movementObj = null;
        break;
    }
    return movementObj
  }

  rotate(movementObj: Piece) {
    let prevRotation = movementObj.rotation;
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
        break;
    }
    return prevRotation;
  }
}
