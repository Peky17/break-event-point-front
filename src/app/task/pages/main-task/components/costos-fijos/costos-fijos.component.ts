import { Component } from '@angular/core';
import { CostoFijoService } from 'src/app/services/costo-fijo.service';

interface CostoFijo {
  id: number;
  descripcion: string;
  monto: number;
}

@Component({
  selector: 'app-costos-fijos',
  templateUrl: './costos-fijos.component.html',
  styleUrls: ['./costos-fijos.component.css'],
})
export class CostosFijosComponent {
  costosFijosList: CostoFijo[] = [];

  constructor(private costosFijosService: CostoFijoService) {}

  async ngOnInit() {
    await this.getCostosFijosList();
  }

  getCostosFijosList(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.costosFijosService.getCostoFijoList().subscribe({
        next: (data) => {
          console.log(data);
          this.costosFijosList = data;
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
