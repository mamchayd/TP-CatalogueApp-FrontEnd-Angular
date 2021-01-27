import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorieComponent } from './GestionFacture/categorie/categorie.component';
import { ClientComponent } from './GestionFacture/client/client.component';
import { ProduitComponent } from './GestionFacture/produit/produit.component';

const routes: Routes = [
  {path: 'client',component: ClientComponent},
  {path: 'produit',component: ProduitComponent},
  {path: 'categorie',component: CategorieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
