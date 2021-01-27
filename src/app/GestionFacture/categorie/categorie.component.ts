import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../service/category-service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

  categories:any;

  constructor(private categorieService : CategoryService, private flash: FlashMessagesService) { }

  ngOnInit(): void {
    this.OngetCategorie();
  }

  OngetCategorie(){
 
      this.categorieService.getAll().subscribe(data=>{

        this.categories=data;
      })
  }

}
