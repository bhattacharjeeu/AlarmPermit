import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {

  @Input() appTitle: string;
  user: string = "";

  constructor(
    private commonService: CommonService,
    private router: Router) {
    console.log('step 1');
  }

  ngOnChanges() {
    console.log('Step 2');
  }

  ngOnInit() {
    console.log('Step 3');

    this.commonService.userInfoSubject.subscribe((data) => {
      this.user = data;
    });
  }0

  onHelp() {
    window.open('https://material.angular.io/guide/getting-started', '_blank');
  }

  gotoHome() {
    this.router.navigate(['home']);
  }

}
