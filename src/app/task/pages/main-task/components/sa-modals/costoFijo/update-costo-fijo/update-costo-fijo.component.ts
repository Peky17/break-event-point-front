import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  NgbModal,
  NgbModalConfig,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { CostoFijoService } from 'src/app/services/costo-fijo.service';
import { CostoVariableService } from 'src/app/services/costo-variable.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-costo-fijo',
  templateUrl: './update-costo-fijo.component.html',
  styleUrls: ['./update-costo-fijo.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class UpdateCostoFijoComponent {
  @Input() costo: any;
  updateFormulario!: FormGroup;

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private costoFijoService: CostoFijoService,
    private formBuilder: FormBuilder
  ) {
    config.backdrop = 'static';
    config.keyboard = true;
  }

  ngOnInit() {
    // Initialize the FormGroup here, after tarea has been initialized.
    this.updateFormulario = this.formBuilder.group({
      descripcion: [
        this.costo.descripcion,
        [Validators.required, Validators.minLength(6)],
      ],
      monto: [this.costo.monto, [Validators.required, Validators.min(1)]],
    });
  }

  open(content: any) {
    const modalOptions: NgbModalOptions = {
      backdrop: 'static', // Mantener el fondo visible
      keyboard: true, // Permitir cerrar el modal con la tecla Esc
    };

    this.modalService.open(content, modalOptions);
  }

  updateCosto() {
    // Validar el formulario
    if (this.updateFormulario.valid) {
      // Instanciar el formulario
      const formData = this.updateFormulario.value;
      // Agregar el id del costo
      formData.id = this.costo.id;
      // Realizar la petición
      this.costoFijoService.updateCostoFijo(formData).subscribe((res) => {
        // Cerrar modal
        this.modalService.dismissAll();
        Swal.fire({
          title: 'OPERACIÓN EXITOSA',
          text: 'Costo actualizado con éxito',
          icon: 'success',
        }).then(() => {
          location.reload();
        });
      });
    } else {
      Swal.fire({
        title: 'ERROR',
        text: 'Por favor, rellene todos los campos correctamente',
        icon: 'error',
        toast: true,
        position: 'top-end',
      });
    }
  }
}
