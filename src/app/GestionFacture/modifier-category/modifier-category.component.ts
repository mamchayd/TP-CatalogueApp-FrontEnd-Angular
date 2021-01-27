import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../service/Client/client-service";
import {ActivatedRoute, Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import { CategoryService } from 'src/app/service/category-service';

@Component({
  selector: 'app-modifier-category',
  templateUrl: './modifier-category.component.html',
  styleUrls: ['./modifier-category.component.scss']
})
export class ModifierCategoryComponent implements OnInit {

  public category:any;
  public id:string="";
  constructor(private categoryService : CategoryService, 
              private route: Router, 
              private flash: FlashMessagesService, 
              private routeActive: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.routeActive.snapshot.params['id'];
    this.categoryService.getById(this.id).subscribe(data=>{
      this.category=data;
    });
  
  }
  modifier() {
    this.categoryService.update(Number(this.id), this.category).subscribe(data=>{});
    this.flash.show('La category bien ete modifier', { cssClass:'alert alert-success',timeout:2000});
    setTimeout(() => {
      this.route.navigate(['categorie']);
    }, 1000);  //1s
  }
}


