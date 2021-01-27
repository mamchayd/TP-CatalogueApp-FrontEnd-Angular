import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../service/Client/client-service";
import {ActivatedRoute, Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-modifier-client',
  templateUrl: './modifier-client.component.html',
  styleUrls: ['./modifier-client.component.scss']
})
export class ModifierClientComponent implements OnInit {
  public client:any;
  public id:string="";
  constructor(private clientService : ClientService, 
              private route: Router, 
              private flash: FlashMessagesService, 
              private routeActive: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.routeActive.snapshot.params['id'];
    this.clientService.getById(this.id).subscribe(data=>{
      this.client=data;
    });
  
  }
  modifier() {
    this.clientService.update(Number(this.id), this.client).subscribe(data=>{});
    this.flash.show('Le client bien ete modifier', { cssClass:'alert alert-success',timeout:2000});
    setTimeout(() => {
      this.route.navigate(['products']);
    }, 1000);  //1s
  }
}

