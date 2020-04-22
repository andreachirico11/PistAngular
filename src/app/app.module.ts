import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SvgEnvelopeComponet } from './svgEnvelopeComponent/svgEnvelopeComponent';
import { SvgPartComponent } from './svgParts/svgPart.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgEnvelopeComponet,
    SvgPartComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
