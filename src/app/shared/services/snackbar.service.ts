import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private _matSnackBar : MatSnackBar
  ) { }

open(msg : string){
this._matSnackBar.open(msg , 'close' ,{
  duration:3000,
  horizontalPosition:'end',
  verticalPosition:'bottom'
})
}
}
