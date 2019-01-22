import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from 'src/app/material.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HeaderComponent, 
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, FormsModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent
  ]
})
export class alarmpermitCommonModule { }
