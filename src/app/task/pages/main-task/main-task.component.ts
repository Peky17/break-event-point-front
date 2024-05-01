import { Component, Input, OnInit } from '@angular/core';
import { BreakEventPointService } from 'src/app/services/break-event-point.service';
import Swal from 'sweetalert2';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.css'],
})
export class MainTaskComponent implements OnInit {
  totalCV: number = 0;
  totalCF: number = 0;
  cantidadEquilibrio: number = 0;
  ingresoEquilibrio: number = 0;
  graphData: any;

  constructor(private breakEventPointService: BreakEventPointService) {}

  async ngOnInit() {
    await this.getTotalCV();
    await this.getTotalCF();
    await this.getCantidadEquilibrio(300);
    await this.getIngresoEquilibrio(300);
    await this.getGraphData(300, 156);
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
