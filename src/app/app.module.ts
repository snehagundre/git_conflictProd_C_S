import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProdDashComponent } from './shared/components/prod-dash/prod-dash.component';
import { ProdFormComponent } from './shared/components/prod-form/prod-form.component';
import { ProdCardComponent } from './shared/components/prod-card/prod-card.component';
import { GetConfirmComponent } from './shared/components/get-confirm/get-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdDashComponent,
    ProdFormComponent,
    ProdCardComponent,
    GetConfirmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
