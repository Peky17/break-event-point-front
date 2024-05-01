import { Component, Input, OnInit } from '@angular/core';
import { BreakEventPointService } from 'src/app/services/break-event-point.service';
import Swal from 'sweetalert2';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.css'],
})
export class MainTaskComponent implements OnInit {
  public chart: any;
  totalCV: number = 0;
  totalCF: number = 0;
  cantidadEquilibrio: number = 0;
  ingresoEquilibrio: number = 0;
  graphData: any;

  constructor(private breakEventPointService: BreakEventPointService) {}

  async ngOnInit() {
    await this.getGraphData(300, 156);
    console.log(this.graphData);
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    const myChart: any = canvas.getContext('2d');

    const data = {
      labels: this.graphData.map((dataPoint: any) => dataPoint.index),
      datasets: [
        {
          label: 'Costo Total',
          data: this.graphData.map((dataPoint: any) => dataPoint.costoTotal),
          fill: false,
          borderColor: 'rgba(75, 192, 192, 1)', // Color de la línea del costo total
          tension: 0.1, // Tensión de la línea
        },
        {
          label: 'Ingreso de Venta',
          data: this.graphData.map(
            (dataPoint: any) => dataPoint.ingresoOfVenta
          ),
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)', // Color de la línea del ingreso de venta
          tension: 0.1, // Tensión de la línea
        },
      ],
    };
    const options = {
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Índice', // Etiqueta del eje X
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Valor', // Etiqueta del eje Y
          },
        },
      },
    };
    const chart = new Chart(myChart, {
      type: 'line', // Cambiar el tipo de gráfico a línea
      data: data,
      options: options,
    });
  }

  // Método para obtener el total del costo variable
  getTotalCV(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.breakEventPointService.getTotalCV().subscribe({
        next: (data) => {
          const value = data.value;
          this.totalCV = value;
          resolve();
        },
        error: (error) => {
          console.error(error);
          reject(error);
        },
      });
    });
  }

  // Método para obtener el total del costo fijo
  getTotalCF(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.breakEventPointService.getTotalCF().subscribe({
        next: (data) => {
          const value = data.value;
          this.totalCF = value;
          resolve();
        },
        error: (error) => {
          console.error(error);
          reject(error);
        },
      });
    });
  }

  // Método para obtener la cantidad de equilibrio
  getCantidadEquilibrio(precioUnitarioVenta: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.breakEventPointService
        .getCantidadEquilibrio(precioUnitarioVenta)
        .subscribe({
          next: (data) => {
            this.cantidadEquilibrio = data.value;
            resolve();
          },
          error: (error) => {
            console.error(error);
            reject(error);
          },
        });
    });
  }

  // Método para obtener el ingreso de equilibrio
  getIngresoEquilibrio(precioUnitarioVenta: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.breakEventPointService
        .getIngresoEquilibrio(precioUnitarioVenta)
        .subscribe({
          next: (data) => {
            this.ingresoEquilibrio = data.value;
            resolve();
          },
          error: (error) => {
            console.error(error);
            reject(error);
          },
        });
    });
  }

  // Método para obtener los datos del gráfico
  getGraphData(unitPriceVenta: number, qtyUnidades: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.breakEventPointService
        .getGraphData(unitPriceVenta, qtyUnidades)
        .subscribe({
          next: (data) => {
            this.graphData = data;
            resolve();
          },
          error: (error) => {
            console.error(error);
            reject(error);
          },
        });
    });
  }
}
