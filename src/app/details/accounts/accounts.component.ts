import { Component, OnInit } from '@angular/core';
import { RemoteService } from 'src/app/services/remote.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  accounts = [];

  constructor(private remoteService: RemoteService) { }

  ngOnInit() {
    this.remoteService.getAccountsDetails().subscribe((res: any) => {
      this.accounts = res;
    })
  }

}
