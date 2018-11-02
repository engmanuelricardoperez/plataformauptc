import { Component, OnInit, Input } from '@angular/core';

import { Dashboard } from '../../models/dashboard';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'dashboard-details',
  templateUrl: './dashboard-details.component.html',
  styleUrls: ['./dashboard-details.component.css']
})
export class DashboardDetailsComponent implements OnInit {

  @Input() dashboard: Dashboard;

  constructor() { }

  ngOnInit() {
  }

}
