import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/prod';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-prod-card',
  templateUrl: './prod-card.component.html',
  styleUrls: ['./prod-card.component.scss']
})
export class ProdCardComponent implements OnInit {
   productArr:Array<IProduct>=[]


  

  constructor(
    private _producSrrvice:ProductService

  ) { }

  ngOnInit(): void {
   this._producSrrvice.fetchAllProducts()
    
    .subscribe({
      next:res=>{
        console.log(res.massage.data)
        this.productArr=res.massage.data
      }
    })
  }

  onEdit(product:IProduct){
  this._producSrrvice.editProduct$.next(product)
  }

}
