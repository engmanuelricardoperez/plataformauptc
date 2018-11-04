import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Dashboard } from '../models/dashboard';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private dbPath = '/sensor/dht';

  dashboardsRef: AngularFireList<Dashboard> = null;
  dashboardsOneRef: AngularFireList<Dashboard> = null;

  constructor(private db: AngularFireDatabase) {
    this.dashboardsRef = db.list(this.dbPath);
    this.dashboardsOneRef = db.list(this.dbPath, ref => ref.limitToLast(1));
  }
 
  getDashboardList(): AngularFireList<Dashboard> {
    return this.dashboardsRef;
  }

  getDashboardListOne(): AngularFireList<Dashboard> {
    return this.dashboardsOneRef;
  }


  private handleError(error) {
    console.log(error);
  }
}
