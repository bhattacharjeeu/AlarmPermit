import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { alarmpermitCommonModule } from 'src/app/alarmpermit-common/alarmpermit-common.module';
import { MaterialModule } from './material.module';
import { DetailsModule } from 'src/app/details/details.module';
import { CommonService } from 'src/app/services/common.service';
import { RemoteService } from 'src/app/services/remote.service';
import { UrlHelperService } from 'src/app/services/url-helper.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule, 
    ReactiveFormsModule,
    alarmpermitCommonModule,
    AppRoutingModule
  ],
  providers: [
    CommonService,
    RemoteService,
    UrlHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
