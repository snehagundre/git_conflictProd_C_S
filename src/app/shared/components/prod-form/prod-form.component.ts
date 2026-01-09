import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { error } from 'console';
import { IProduct } from '../../models/prod';

@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.component.html',
  styleUrls: ['./prod-form.component.scss']
})
export class ProdFormComponent implements OnInit {
   productForm!:FormGroup
   isIneditMode:boolean=false
   editObj!:IProduct
  constructor(
    private _productService:ProductService
  ) { }

  ngOnInit(): void {
    this.createProducTform()
    this.editprod()
  }

  createProducTform(){
    this.productForm=new FormGroup({
      name:new FormControl(null, [Validators.required]),
      description:new FormControl(null, [Validators.required])
    })
  }

  productAdd(){
    
  }

  editprod(){
  this._productService.editProduct$
    .subscribe({
      next:res=>{
        console.log(res)
        this.editObj=res
        this.productForm.patchValue(res)
        this.isIneditMode=true

      }
     
    })
  }

  onUpdate(){
    if(this.productForm.valid){
      let updateObj={...this.productForm.value, id:this.editObj.id}
      console.log(updateObj)
      this._productService.updateProduct(updateObj)
    }
  }

}
