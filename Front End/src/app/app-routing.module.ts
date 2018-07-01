import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { ListingComponent } from "./listing/listing.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'listing',
    component: ListingComponent
  }
  ,
  {
    path: 'details/:id',
    component: DetailsComponent
  }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
