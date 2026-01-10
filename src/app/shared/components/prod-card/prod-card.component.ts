import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/prod';
import { ProductService } from '../../services/product.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SnackbarService } from '../../services/snackbar.service';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-prod-card',
  templateUrl: './prod-card.component.html',
  styleUrls: ['./prod-card.component.scss'],
})
export class ProdCardComponent implements OnInit {
  productsArr: Array<IProduct> = [];
  constructor(
    private _productService: ProductService,
    private _dialog: MatDialog,
    private _snackBar: SnackbarService
  ) { }



  ngOnInit(): void {
    this._productService.fetchAllProducts()
      .subscribe(res => this.productsArr = res.massage.data);
  }





  onRemoveProduct(id: string) {
    let matcoFig = new MatDialogConfig();
    (matcoFig.disableClose = true),
      (matcoFig.data = `Are u sure do u want to remove this products?`),
      (matcoFig.width = '300px');

    let dialogRef = this._dialog.open(GetConfirmComponent, matcoFig);
    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this._productService.removeProduct(id).subscribe({
            next: (data) => {
              this._snackBar.open(data.massage.msg);
            },
          });
        }
      },
    });
  }
}
