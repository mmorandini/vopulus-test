import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import { PincoPallinoService } from './pincopallino.service';
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PincoPallinoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
