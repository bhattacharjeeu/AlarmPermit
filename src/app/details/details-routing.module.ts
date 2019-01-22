import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizationComponent } from 'src/app/details/organization/organization.component';
import { AccountsComponent } from 'src/app/details/accounts/accounts.component';
import { DetailsComponent } from 'src/app/details/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: DetailsComponent,
    children: [
      {
        path: 'organization',
        component: OrganizationComponent,
      },
      {
        path: 'accounts',
        component: AccountsComponent
      },
      {
        path: '',
        redirectTo: 'organization',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
