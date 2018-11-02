import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Dashboard } from '../models/dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private dbPath = '/sensor';

  dashboardsRef: AngularFireList<Dashboard> = null;

  constructor(private db: AngularFireDatabase) {
    this.dashboardsRef = db.list(this.dbPath);
  }
 
  getDashboardList(): AngularFireList<Dashboard> {
    return this.dashboardsRef;
  }


  private handleError(error) {
    console.log(error);
  }
}
