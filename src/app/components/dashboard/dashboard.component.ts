import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { DashboardService } from '../../services/dashboard.service';
import { Dashboard } from 'src/app/models/dashboard';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboards: any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getDashboardsList();
    console.log(this.dashboards);
  }

  getDashboardsList() {
    // Use snapshotChanges().map() to store the key
    this.dashboardService.getDashboardList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(dashboards => {
      this.dashboards = dashboards;
    });
  }


}
