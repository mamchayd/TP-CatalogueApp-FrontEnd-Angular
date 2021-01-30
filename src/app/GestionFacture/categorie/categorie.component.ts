import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../service/category-service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";


@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

  categories:any;
  public category:any={categoryID:0, name:""}


  constructor(private categorieService : CategoryService,  
      private route: Router,
    private flash: FlashMessagesService) { }

  ngOnInit(): void {
    this.OngetCategorie();
  }

  OngetCategorie(){
 
      this.categorieService.getAll().subscribe(data=>{

        this.categories=data;
      })
  }

  ajouter() {
    this.categorieService.add(this.category).subscribe(data=>{});
    this.flash.show('Le produit bien ete ajouter', { cssClass:'alert alert-success',timeout:1000});
    
    setTimeout(() => {
      this.route.navigate(['categorie']);
      this.OngetCategorie();
    }, 1000);  //1s
  }

  
  deleteCategory(id : number){
    console.log("hi");
    if(confirm('vous ete sur le point de supprimer une category, ete-vous sur de cette operation ?')) 
    {
      console.log(id);
      this.categorieService.delete(id).subscribe(data=>{});
     
      this.flash.show('category bien supprimer', {cssClass: 'alert alert-danger', timeout: 2000});
      setTimeout(() => {
        this.route.navigate(['categorie']);
        this.OngetCategorie();
      }, 1000);  //1s
    }
    }

}
