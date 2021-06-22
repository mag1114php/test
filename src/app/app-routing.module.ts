import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImagesComponent } from './images/images.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaginationComponent } from './pagination/pagination.component';


const routes: Routes = [
  { path: 'page/:page/item/:id', component: ImageDetailComponent },
  { path: '',redirectTo: '/page/1', pathMatch: 'full'},
  { path: "page/:page", component: ImagesComponent},
  { path: '**', component: PageNotFoundComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }