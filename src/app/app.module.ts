import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorieComponent } from './GestionFacture/categorie/categorie.component';
import { ProduitComponent } from './GestionFacture/produit/produit.component';
import { ClientComponent } from './GestionFacture/client/client.component';
import {HttpClientModule} from '@angular/common/http';
import {FlashMessagesModule} from "angular2-flash-messages";

@NgModule({
  declarations: [
    AppComponent,
    CategorieComponent,
    ProduitComponent,
    ClientComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
