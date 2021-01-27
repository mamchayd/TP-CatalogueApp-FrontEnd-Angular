import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorieComponent } from './GestionFacture/categorie/categorie.component';
import { ClientComponent } from './GestionFacture/client/client.component';
import { ModifierClientComponent } from './GestionFacture/modifier-client/modifier-client.component';

import { ProduitComponent } from './GestionFacture/produit/produit.component';

const routes: Routes = [
  {path: 'client',component: ClientComponent},
  {path: 'produit',component: ProduitComponent},
  {path: 'categorie',component: CategorieComponent},
  {path: 'modifierClient/:id',component: ModifierClientComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
