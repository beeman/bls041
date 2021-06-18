import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShellModule } from '@bls041/shell';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ShellModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
