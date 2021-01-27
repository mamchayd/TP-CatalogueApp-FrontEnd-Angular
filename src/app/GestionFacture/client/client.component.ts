import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../service/Client/client-service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  public clients:any;
  constructor(private clientService : ClientService, private flash: FlashMessagesService) { }
  ngOnInit(): void {
    this.OngetClients();
  }
  OngetClients(){
    this.clientService.getAll().subscribe(data=>{
      this.clients=data;
    })
  }
}
