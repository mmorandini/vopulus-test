import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PincoPallinoService } from './pincopallino.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PincoPallinoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
