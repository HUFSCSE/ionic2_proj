import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import { Chart } from 'chart.js';
import {Http} from "@angular/http";

/*
  Generated class for the Chart page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html'
})
export class ChartPage {
  @ViewChild('barCanvas') barCanvas;
  barChart: any;
  chartData: Array<any>;
  weekIndex: number;
  weekIndexMax: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.http.get('https://ionic2study-a2337.firebaseio.com/chart/weekly.json').map(res => res.json()).subscribe(serverData => {
      this.weekIndexMax = serverData.length-1;
      this.weekIndex = serverData.length-1;
      this.chartData = serverData;
      this.chartGenerate();
    }); // http
  }

  nextWeek() {
    if (this.weekIndex < this.weekIndexMax) {
      this.weekIndex++;
      this.chartGenerate();
    } else {
      this.toastCtrl.create({
        message: '더이상 다음 데이터가 없습니다.',
        duration: 3000,
        position: 'top'
      }).present();
    }

  }

  prevWeek() {
    if (this.weekIndex > 0) {
      this.weekIndex--;
      this.chartGenerate();
    } else {
      this.toastCtrl.create({
        message: '더이상 이전 데이터가 없습니다.',
        duration: 3000,
        position: 'top'
      }).present();
    }

  }

  chartGenerate() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'bar',
      data: {
        labels: ["문재인", "안희정", "안철수", "이재명", "홍준표", "심상정", "유승민", "손학규", "황교안", "반기문", "박원순"],
        datasets: [{
          label: '여론조사 지지도(%)',
          data: this.chartData[this.weekIndex],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    }); // chart
  }
}
