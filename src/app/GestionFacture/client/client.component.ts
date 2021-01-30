import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../service/Client/client-service";
import {FlashMessagesService} from "angular2-flash-messages";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  public clients:any;
  public id:string="";

  client:any={id:0,name:"",email:"",adress:""};

  constructor(private clientService : ClientService, private route: Router, private flash: FlashMessagesService,private routeActive: ActivatedRoute) { }
  ngOnInit(): void {
    
    this.OngetClients();

  }
  OngetClients(){
    this.clientService.getAll().subscribe(data=>{
      this.clients=data;
    })
  }
  save(){
    this.clientService.add(this.client).subscribe(data=>{}
      );
    
    this.flash.show('clisnt  added successfully', 
    {
       cssClass:'alert alert-success',timeout:1000
       
      });
    setTimeout(() => {
      this.OngetClients();
      this.route.navigate(['client']);
    }, 1000);  //1s
  }

  deleteClient(id : number){
    if(confirm('vous ete sur le point de supprimer un client, ete-vous sur de cette operation ?')) 
    {
      console.log(id);
      this.clientService.delete(id).subscribe(data=>{});
      
      this.flash.show('Client bien supprimer', {cssClass: 'alert alert-danger', timeout: 2000});
      setTimeout(() => {
        this.route.navigate(['client']);
        this.OngetClients();
      }, 1000);  //1s
    }
    }
  


}
