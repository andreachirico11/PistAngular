import { Component,  ViewChild, AfterViewChecked, AfterViewInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { PieceNames } from './pieceNames';
import { SvgEnvelopeComponet } from './svgEnvelopeComponent/svgEnvelopeComponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  @ViewChild('selection', {static: true}) selectionRadioForm: NgForm;
  @ViewChild('mainBoard', {static: true}) mainSVG: ElementRef
  pieceNames = PieceNames;
  selectedValue = this.pieceNames.Straight;
  createdElement = "corner";

  createdComponentsArray = [];


  constructor(private compFactory : ComponentFactoryResolver) {}

   createAndAddNewElement() {

    const factory = this.compFactory.resolveComponentFactory(SvgEnvelopeComponet);
    const newComp = this.mainSVG;

  };




















  // const highLightElement = (element) => {
  //   if (elementHighLighted) {
  //     elementHighLighted.setAttributeNS(null, "stroke", "black");
  //   }
  //   elementHighLighted = element;
  //   elementHighLighted.setAttributeNS(null, "stroke", "red");
  // };




  // const moveRight = () => {
  //   const previousX = parseInt(
  //     elementHighLighted.getAttributeNS(null, "x")
  //   );
  //   if (previousX < 1300) {
  //     elementHighLighted.setAttributeNS(null, "x", previousX + 100);
  //   }
  // };
  // const moveLeft = () => {
  //   const previousX = parseInt(
  //     elementHighLighted.getAttributeNS(null, "x")
  //   );
  //   if (previousX > 0) {
  //     elementHighLighted.setAttributeNS(null, "x", previousX - 100);
  //   }
  // };
  // const moveUp = () => {
  //   const previousY = parseInt(
  //     elementHighLighted.getAttributeNS(null, "y")
  //   );
  //   if (previousY > 0) {
  //     elementHighLighted.setAttributeNS(null, "y", previousY - 100);
  //   }
  // };
  // const moveDown = () => {
  //   const previousY = parseInt(
  //     elementHighLighted.getAttributeNS(null, "y")
  //   );
  //   if (previousY < 900) {
  //     elementHighLighted.setAttributeNS(null, "y", previousY + 100);
  //   }
  // };

  // const rotate = () => {
  //   if (elementHighLighted) {
  //     const previousRotation = elementHighLighted.firstChild.getAttributeNS(
  //       null,
  //       "transform"
  //     );
  //     switch (previousRotation) {
  //       case "rotate(0,50,50)":
  //         elementHighLighted.firstChild.setAttributeNS(null, "transform", "rotate(90,50,50)");
  //         break;
  //       case "rotate(90,50,50)":
  //         elementHighLighted.firstChild.setAttributeNS(null, "transform", "rotate(180,50,50)");
  //         break;
  //       case "rotate(180,50,50)":
  //         elementHighLighted.firstChild.setAttributeNS(null, "transform", "rotate(270,50,50)");
  //         break;
  //       case "rotate(270,50,50)":
  //         elementHighLighted.firstChild.setAttributeNS(null, "transform", "rotate(0,50,50)");
  //         break;
  //       default: console.log('default');

  //         break;
  //     }
  //   }
  // };

  // const done = () => {
  //   highLightElement(null);
  // };



}
