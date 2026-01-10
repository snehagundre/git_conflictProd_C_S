import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProdDashComponent } from './shared/components/prod-dash/prod-dash.component';
import { ProdFormComponent } from './shared/components/prod-form/prod-form.component';
import { ProdCardComponent } from './shared/components/prod-card/prod-card.component';
import { GetConfirmComponent } from './shared/components/get-confirm/get-confirm.component';

import { ReactiveFormsModule } from '@angular/forms';


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
    BrowserAnimationsModule,

    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatDialogModule,


    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
