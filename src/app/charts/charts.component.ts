import {
  Component,
  Input,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-chart',
  standalone: true,
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements AfterViewInit, OnDestroy {
  @Input() options!: echarts.EChartsOption;
  @Input() width: string = '100%';
  @Input() height: string = '300px';

  private chartInstance!: echarts.ECharts;

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.createChart();
    this.addResizeListener();
  }

  private createChart(): void {
    const container = this.el.nativeElement.querySelector('.chart-container');

    if (container && container.clientWidth && container.clientHeight) {
      this.chartInstance = echarts.init(container);
      this.chartInstance.setOption(this.options);
    } else {
      console.warn(
        'Chart container dimensions are invalid. Please check the CSS or parent layout.'
      );
    }
  }

  private addResizeListener(): void {
    window.addEventListener('resize', this.resizeChart);
  }

  private resizeChart = (): void => {
    if (this.chartInstance) {
      this.chartInstance.resize();
    }
  };

  ngOnDestroy(): void {
    if (this.chartInstance) {
      this.chartInstance.dispose();
    }
    window.removeEventListener('resize', this.resizeChart);
  }
}
