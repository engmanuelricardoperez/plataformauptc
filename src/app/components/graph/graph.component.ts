import { Component, OnInit, OnDestroy,ElementRef} from '@angular/core';
import { Chart } from 'chart.js';
import { ViewChild } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as Lodash from 'lodash';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
	@ViewChild('canvas') canvas: ElementRef;
	chart = []; 
	arraytoPassChart = [];
  labels: any = [];
  dataT: any = [];
  dataH: any = [];
  flag: boolean;
  filteredGraph: any;
  filters = {};

	@ViewChild('lineCanvas') lineCanvas;
  constructor(private db: AngularFireDatabase) { }

	 ngOnInit(){
		this.db.list('/sensor/dht')
		.valueChanges()
		.map(res => {
			return res.map(eachlLabel => eachlLabel)
		})
		.subscribe(res => { 
			res.forEach(item => {
				var cont = 1;
				Object.keys(item).map(key=>item[key]).map(order =>{
					
					if(cont != 1  && cont != 2 && cont != 3 && cont != 4)
						cont = 1;
					if(cont == 2)
					{
						this.labels.push(order);
						
					}
					if(cont == 4)
					{
						this.dataT.push(order);
					}
					if(cont == 3)
					{
						this.dataH.push(order);
					}
					cont = cont + 1;
				})
			})
			this.makeChart();
		})
	}

	filterGreaterThan(property: string, setValue: number) {
		this.filters[property] = val => val > setValue
		this.applyFilters()
	  }

	private applyFilters() {
		this.filteredGraph = Lodash.filter(this.db, Lodash.conforms(this.filters));
		console.log(this.filteredGraph);
	  }

	makeChart() {
	this.chart = new Chart(this.canvas.nativeElement, {
		type: 'line',
		data: {
			labels: this.labels,
			datasets: [
				{
					label: "Temperatura",
					fill: false,
					lineTension: 0.1,
					backgroundColor: "rgba(255,192,192,0.4)",
					borderColor: "rgba(255,192,192,1)",
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: "rgba(255,192,192,1)",
					pointBackgroundColor: "#fff",
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: "rgba(255,192,192,1)",
					pointHoverBorderColor: "rgba(220,220,220,1)",
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: this.dataT,
					spanGaps: false,
					options: {
						responsive: true
					}
				},
				{
					label: "Humedad",
					fill: false,
					lineTension: 0.1,
					backgroundColor: "rgba(75,192,192,0.4)",
					borderColor: "rgba(75,192,192,1)",
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: "rgba(75,192,192,1)",
					pointBackgroundColor: "#fff",
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: "rgba(75,192,192,1)",
					pointHoverBorderColor: "rgba(220,220,220,1)",
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: this.dataH,
					spanGaps: false,
					options: {
						responsive: true
					}
				}
				
			]
		}
	});
	}
}