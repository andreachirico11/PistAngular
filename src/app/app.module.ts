import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SvgEnvelopeComponet } from './track-generator-component/track-component/svgEnvelopeComponent/svgEnvelopeComponent';
import { SvgPartComponent } from './track-generator-component/track-component/svgParts/svgPart.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { TrackGeneratorComponentComponent } from './track-generator-component/track-generator-component.component';
import { ActionsComponentComponent } from './track-generator-component/actions-component/actions-component.component';
import { TrackComponentComponent } from './track-generator-component/track-component/track-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgEnvelopeComponet,
    SvgPartComponent,
    MenuComponentComponent,
    TrackGeneratorComponentComponent,
    ActionsComponentComponent,
    TrackComponentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
