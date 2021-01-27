import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorieComponent } from './GestionFacture/categorie/categorie.component';
import { ClientComponent } from './GestionFacture/client/client.component';
import { ModifierCategoryComponent } from './GestionFacture/modifier-category/modifier-category.component';
import { ModifierClientComponent } from './GestionFacture/modifier-client/modifier-client.component';
import { ModifierProduitComponent } from './GestionFacture/modifier-produit/modifier-produit.component';

import { ProduitComponent } from './GestionFacture/produit/produit.component';

const routes: Routes = [
  {path: 'client',component: ClientComponent},
  {path: 'produit',component: ProduitComponent},
  {path: 'categorie',component: CategorieComponent},
  {path: 'modifierClient/:id',component: ModifierClientComponent},
  {path: 'modifierProduit/:id',component: ModifierProduitComponent},
  {path: 'modifierCategory/:id',component: ModifierCategoryComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
