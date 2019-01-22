import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  userInfoSubject: Subject<string> = new Subject<string>();

  constructor() { }
}
