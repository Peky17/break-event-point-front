import { Component, Input } from '@angular/core';
import {
  NgbModal,
  NgbModalConfig,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { CostoVariableService } from 'src/app/services/costo-variable.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-costo-variable',
  templateUrl: './delete-costo-variable.component.html',
  styleUrls: ['./delete-costo-variable.component.css'],
  // add NgbModalConfig and NgbModal to the component providers
  providers: [NgbModalConfig, NgbModal],
})
export class DeleteCostoVariableComponent {
  // Recibimos el dato del componente principal
  @Input() costo: any;

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private costoVariableService: CostoVariableService
  ) {
    config.backdrop = 'static';
    config.keyboard = true;
  }

  open(content: any) {
    const modalOptions: NgbModalOptions = {
      backdrop: 'static', // Mantener el fondo visible
      keyboard: true, // Permitir cerrar el modal con la tecla Esc
    };

    this.modalService.open(content, modalOptions);
  }

  eliminarCosto() {
    // Realizar la petición
    this.costoVariableService
      .deleteCostoVariable(this.costo.id)
      .subscribe((res) => {
        // Cerrar modal
        this.modalService.dismissAll();
        // Alertar
        Swal.fire({
          title: 'OPERACIÓN EXITOSA',
          text: 'Costo eliminado con éxito',
          icon: 'success',
        }).then(() => {
          // Recargar la página
          location.reload();
        });
      });
  }
}
