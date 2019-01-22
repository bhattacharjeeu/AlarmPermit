import { Injectable } from '@angular/core';
import { ServiceNames } from 'src/app/util/servicenames';

@Injectable({
  providedIn: 'root'
})
export class UrlHelperService {

  private base_url = "https://jsonplaceholder.typicode.com/";

  constructor() { }

  getUrl(name: ServiceNames) {

    switch(name) {
      case ServiceNames.ORGANIZATION: {
        return this.base_url + ServiceNames.ORGANIZATION;
      }
      case ServiceNames.ACCOUNTS: {
        return this.base_url + ServiceNames.ACCOUNTS;
      }
    }

  }
}
