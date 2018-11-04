import { Injectable } from '@angular/core';
import { Chart } from 'chart.js';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Dashboard } from '../models/dashboard';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  /**
   * The ChartJS Object
   * @var {any} chart
   */
  public chart: any = null;

  /**
 * Interval to update the chart
 * @var {any} intervalUpdate
 */
 private intervalUpdate: any = null;

  constructor() { }

  private ngOnInit(): void {
    this.intervalUpdate = setInterval(function(){
     this.showData();
    }.bind(this), 500);
   }

   /**
   * On component destroy
   * @function ngOnDestroy
   * @return {void}
   */
  private ngOnDestroy(): void {
    clearInterval(this.intervalUpdate);
 }

}
