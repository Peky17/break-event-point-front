import { Component, Input } from '@angular/core';
import { CostoVariableService } from 'src/app/services/costo-variable.service';
import Swal from 'sweetalert2';

interface CostoVariable {
  id: number;
  descripcion: string;
  monto: number;
}

@Component({
  selector: 'app-costos-variables',
  templateUrl: './costos-variables.component.html',
  styleUrls: ['./costos-variables.component.css'],
})
export class CostosVariablesComponent {
  @Input() costo: any;

  costosVariablesList: CostoVariable[] = [];

  constructor(private costosVariablesService: CostoVariableService) {}

  async ngOnInit() {
    await this.getCostosVariablesList();
  }

  getCostosVariablesList(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.costosVariablesService.getCostoVariableList().subscribe({
        next: (data) => {
          console.log(data);
          this.costosVariablesList = data;
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
