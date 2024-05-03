import { Component, OnInit } from '@angular/core';
import { BreakEventPointService } from 'src/app/services/break-event-point.service';
import Swal from 'sweetalert2';
import Chart from 'chart.js/auto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.css'],
})
export class MainTaskComponent implements OnInit {
  myForm!: FormGroup;
  public chart: any;
  totalCV: number = 0;
  totalCF: number = 0;
  cantidadEquilibrio: number = 0;
  ingresoEquilibrio: number = 0;
  graphData: any;

  constructor(
    private breakEventPointService: BreakEventPointService,
    private formBuilder: FormBuilder
  ) {}

  async ngOnInit() {
    this.myForm = this.formBuilder.group({
      precioUnitarioVenta: [
        300,
        [Validators.required, Validators.min(0), Validators.max(1000)],
      ],
      qtyUnidadesVendidas: [
        156,
        [Validators.required, Validators.min(0), Validators.max(1000)],
      ],
    });
    // Llamar a los métodos para obtener los datos de costos
    await this.getTotalCV();
    await this.getTotalCF();
    // Llamar a los métodos para obtener los datos de equilibrio
    await this.getCantidadEquilibrio(300);
    await this.getIngresoEquilibrio(300);
    // Llamar a los métodos para obtener los datos de la grafica
    await this.getGraphData(300, 156);
    await this.renderChart();
  }

  // Método para renderizar gráfico
  async renderChart() {
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    const myChart: any = canvas.getContext('2d');

    // Verificar si hay un gráfico existente y destruirlo si es necesario
    if (this.chart) {
      this.chart.destroy();
    }

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
    this.chart = new Chart(myChart, {
      type: 'line', // Cambiar el tipo de gráfico a línea
      data: data,
      options: options,
    });
  }

  async calcularPuntoEquilibrio() {
    if (this.myForm.valid) {
      const unitPriceVenta = this.myForm.get('precioUnitarioVenta')?.value;
      const qtyUnidades = this.myForm.get('qtyUnidadesVendidas')?.value;
      // Llamar a los métodos para obtener los datos de equilibrio
      await this.getCantidadEquilibrio(unitPriceVenta);
      await this.getIngresoEquilibrio(unitPriceVenta);
      // Llamar a los métodos para obtener los datos de la grafica
      await this.getGraphData(unitPriceVenta, qtyUnidades);
      await this.renderChart();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, ingrese los datos correctamente.',
      });
    }
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
      Swal.fire({
        title: 'Cargando',
        text: 'Por favor espere...',
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
      }); // Mostrar el spinner
      this.breakEventPointService
        .getGraphData(unitPriceVenta, qtyUnidades)
        .subscribe({
          next: (data) => {
            this.graphData = data;
            Swal.close();
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
