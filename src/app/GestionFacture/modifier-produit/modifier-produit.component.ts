import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/Product/product-service";
import {CategoryService} from "../../service/category-service";
import {ActivatedRoute, Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.scss']
})
export class ModifierProduitComponent implements OnInit {

  public product:any;
  public categories:any;
  public id:string="";
  constructor(private productService : ProductService, 
    private categoryService : CategoryService,
              private route: Router, 
              private flash: FlashMessagesService, 
              private routeActive: ActivatedRoute) { }
  ngOnInit(): void {
    this.id=this.routeActive.snapshot.params['id'];
    this.productService.getById(this.id).subscribe(data=>{
      this.product=data;
    });
    this.categoryService.getAll().subscribe(data=>{
      this.categories=data;
    })
  }
  save() {
    this.product.categoryID=Number(this.product.categoryID);
    this.productService.update(Number(this.id), this.product).subscribe(data=>{});
    this.flash.show('le produit bien ete modifier', { cssClass:'alert alert-success',timeout:1000});
    setTimeout(() => {
      this.route.navigate(['produit']);
    }, 1000);  //1s
  }
}


