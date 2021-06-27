import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: "This is your scorecard",
          data: [0, 20, 40, 50, 40, 35, 45, 50],
          backgroundColor: "rgb(115 185 243 / 85%)",
          borderColor: "#000",
          fill: false,

        }],
        labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019', 'May 2019', 'June 2019']
      },
      options: {
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            }
          }],
          yAxes: [{
            gridLines: {
              display: false
            }
          }]
        }
      }
    });
  }

}
