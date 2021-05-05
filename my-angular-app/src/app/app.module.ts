import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';
import { ErrorComponent } from './error/error.component';
import { ServerComponent } from './server/server.component';
import { PractisethreeComponent } from './practisethree/practisethree.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    ErrorComponent,
    ServerComponent,
    PractisethreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
