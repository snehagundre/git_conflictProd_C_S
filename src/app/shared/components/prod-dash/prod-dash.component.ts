import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../models/prod';

@Component({
  selector: 'app-prod-dash',
  templateUrl: './prod-dash.component.html',
  styleUrls: ['./prod-dash.component.scss']
})
export class ProdDashComponent implements OnInit {
productsArr !: IProduct[] 
  constructor(
    private _prodService : ProductService
  ) { }

  ngOnInit(): void {
   this.getProducts()
  }

  getProducts(){
   this._prodService.fetchAllProducts().subscribe({
    next:data=>{
       this.productsArr = data.massage.data
    }, 
    error:err=>{

    }
   })
  }
}
