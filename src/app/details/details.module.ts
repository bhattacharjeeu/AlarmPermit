import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { OrganizationComponent } from './organization/organization.component';
import { AccountsComponent } from './accounts/accounts.component';
import { DetailsComponent } from './details/details.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [OrganizationComponent, AccountsComponent, DetailsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    DetailsRoutingModule
  ],
  exports: [
    OrganizationComponent, AccountsComponent, DetailsComponent
  ]
})
export class DetailsModule { }
