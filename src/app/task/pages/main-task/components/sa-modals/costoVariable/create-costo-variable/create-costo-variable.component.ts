import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  NgbModal,
  NgbModalConfig,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { CostoVariableService } from 'src/app/services/costo-variable.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-costo-variable',
  templateUrl: './create-costo-variable.component.html',
  styleUrls: ['./create-costo-variable.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class CreateCostoVariableComponent {
  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private costoVariableService: CostoVariableService,
    private formBuilder: FormBuilder
  ) {
    config.backdrop = 'static';
    config.keyboard = true;
  }

  open(content: any) {
    const modalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: true,
    };

    this.modalService.open(content, modalOptions);
  }

  addFormulario: FormGroup = this.formBuilder.group({
    descripcion: ['', [Validators.required, Validators.minLength(4)]],
    monto: ['', [Validators.required, Validators.min(0)]],
  });

  createCosto() {
    // Validar formulario
    if (this.addFormulario.valid) {
      // Instanciar el formulario
      const formData = this.addFormulario.value;
      // Realizar la petición
      this.costoVariableService
        .createCostoVariable(formData)
        .subscribe((res) => {
          // Cerrar modal
          this.modalService.dismissAll();
          // Alertar
          Swal.fire({
            title: 'OPERACIÓN EXITOSA',
            text: 'Tarea registrada con éxito',
            icon: 'success',
          }).then(() => {
            // Recargar la página
            location.reload();
          });
        });
    } else {
      Swal.fire({
        title: 'ERROR',
        text: 'Por favor, complete el formulario',
        icon: 'error',
        toast: true,
        position: 'top-end',
      });
    }
  }
}
