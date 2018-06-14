import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TileComponent } from './tile/tile.component';

import { LandingPagesComponent } from './pages/landing-pages/landing-pages.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TileComponent,
    LandingPagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
