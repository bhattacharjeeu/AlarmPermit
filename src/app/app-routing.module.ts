import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/alarmpermit-common/home/home.component';
import {} from './details/details.module'

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'details',
    loadChildren: './details/details.module#DetailsModule'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
