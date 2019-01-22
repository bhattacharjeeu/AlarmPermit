import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

import { RemoteService } from 'src/app/services/remote.service';
import { GeneralModel } from 'src/app/model/general-model';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  dataSource = new MatTableDataSource<GeneralModel.Organization[]>();
  displayedColumns: string[] = ['id', 'title', 'completed', 'userId'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private remoteService: RemoteService) { }

  ngOnInit() {
    this.remoteService.getOrganizationDetails().subscribe((res: GeneralModel.Organization[])=> {
      this.dataSource = new MatTableDataSource<any>(res);
      this.dataSource.paginator = this.paginator;
    });
  }

}
