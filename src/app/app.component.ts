import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'UnivHighCharts';
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: string = 'chart';
  chartOptions: Highcharts.Options = {};

  ngOnInit() {
    this.chartOptions = {
      series: [{
        data: [1, 2, 3],
        type: 'line'
      }]
    };
  }
}
