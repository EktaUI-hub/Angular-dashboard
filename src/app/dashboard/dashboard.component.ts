import { Component } from '@angular/core';
import { ChartsComponent } from '../charts/charts.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ChartsComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

  statisticsOptions: echarts.EChartsOption = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      bottom: '5%',
      left: 'center',
      icon: 'circle',
    },
    series: [
      {
        name: 'Statistics',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          formatter: '250\nTotal',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '24',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 100, name: 'Completed', itemStyle: { color: '#36BC9B' } },
          { value: 60, name: 'WIP', itemStyle: { color: '#FBAD17' } },
          { value: 60, name: 'Pending', itemStyle: { color: '#DB4453' } },
          { value: 30, name: 'Rescheduled', itemStyle: { color: '#4B89DC' } },
        ],
      },
    ],
  };


  taskStatusOptions: echarts.EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      top: '5%',
      left: 'center',
      icon: 'circle',
      data: ['Open', 'Closed'],
    },
    grid: {
      left: '3%',
      right: '3%',
      bottom: '10%',
      top: '20%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: ['Campaigns', 'Opportunities', 'Missed Call'],
      axisTick: {
        alignWithLabel: true,
      },
      axisLine: {
        lineStyle: {
          color: 'black',
        },
      },
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: '#eee',
        },
      },
    },
    series: [
      {
        name: 'Open',
        type: 'bar',
        barWidth: '60%',
        stack: 'Total',
        data: [90, 70, 70],
        label: {
          show: true,
          position: 'top',
          formatter: '{c}',
        },
        itemStyle: {
          color: '#DB4453',
        },
      },
      {
        name: 'Closed',
        type: 'bar',
        barWidth: '60%',
        stack: 'Total',
        data: [10, 30, 30],
        label: {
          show: true,
          position: 'top',
          formatter: '{c}',
        },
        itemStyle: {
          color: '#bfbfbf',
        },
      },
    ],
  };

}