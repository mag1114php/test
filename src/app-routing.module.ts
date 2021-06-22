import { NgModule } from '@angular/core';
import { ImageDetailComponent } from './app/image-detail/image-detail.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '/image/:id', component: ImageDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }