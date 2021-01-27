import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/Product/product-service";
import {ClientService} from "../../service/Client/client-service";
import {FlashMessagesService} from "angular2-flash-messages";
import {CategoryService} from "../../service/category-service";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  public products:any=new Array();

  constructor(private productService : ProductService, private categoryService: CategoryService, private flash: FlashMessagesService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.productService.getAll().subscribe(data=>{
      this.products=data;
      this.products.forEach((product:any)=>{
        this.categoryService.getById(product.categoryID).subscribe(data=>{
          let category:any=data;
          product.category=category.name;
        })
      })
    })
  }

}
