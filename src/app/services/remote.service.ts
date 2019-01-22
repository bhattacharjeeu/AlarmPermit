import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material';

import { of } from 'rxjs';
import { map,catchError } from 'rxjs/operators'
import { UrlHelperService } from 'src/app/services/url-helper.service';
import { ServiceNames } from 'src/app/util/servicenames';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  

  constructor( private httpClient: HttpClient, private urlHelper: UrlHelperService) { }

  private getRequest(url: string) {
    return this.httpClient.get(url);
  }

  private postRequest(url, data) {
    return this.httpClient.post(url, data);
  }

  getOrganizationDetails() {
    let url = this.urlHelper.getUrl(ServiceNames.ORGANIZATION);
    console.log(url);
    return this.getRequest(url).pipe(
      map(res => res),
      catchError((error)=> {
        return of(error);
      })
    );
  }

  getAccountsDetails() {
    const url = this.urlHelper.getUrl(ServiceNames.ACCOUNTS);
    return this.getRequest(url);
  }

  getAuthenticationDetails() {

  }


}
