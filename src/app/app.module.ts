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
import { FormsModule } from '@angular/forms';
import { ModifierClientComponent } from './GestionFacture/modifier-client/modifier-client.component';
import { ModifierCategoryComponent } from './GestionFacture/modifier-category/modifier-category.component';
import { ModifierProduitComponent } from './GestionFacture/modifier-produit/modifier-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    CategorieComponent,
    ProduitComponent,
    ClientComponent,
    ModifierClientComponent,
    ModifierCategoryComponent,
    ModifierProduitComponent,
    
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
