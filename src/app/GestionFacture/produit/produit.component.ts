import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/Product/product-service";
import {ClientService} from "../../service/Client/client-service";
import {FlashMessagesService} from "angular2-flash-messages";
import {CategoryService} from "../../service/category-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  public products:any=new Array();
  public product:any={productID:0, name:"", price:0, categoryID:1, category:null}
  public categories:any;


  constructor(private productService : ProductService, 
    private categoryService: CategoryService, 
    private route: Router,
    private flash: FlashMessagesService) { }

  ngOnInit(): void {
    this.getProducts();
    this.categoryService.getAll().subscribe(data=>{
      this.categories=data;
    })
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
  ajouter() {
    this.product.categoryID=Number(this.product.categoryID);
    this.productService.add(this.product).subscribe(data=>{});
    this.flash.show('Le produit bien ete ajouter', { cssClass:'alert alert-success',timeout:1000});
    this.getProducts();
    setTimeout(() => {
      this.route.navigate(['produit']);
    }, 1000);  //1s
  }

}
