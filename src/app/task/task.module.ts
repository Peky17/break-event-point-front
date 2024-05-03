import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TaskRoutingModule } from './task-routing.module';
import { MainTaskComponent } from './pages/main-task/main-task.component';
import { CostosFijosComponent } from './pages/main-task/components/costos-fijos/costos-fijos.component';
import { CostosVariablesComponent } from './pages/main-task/components/costos-variables/costos-variables.component';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { UpdateCostoVariableComponent } from './pages/main-task/components/sa-modals/costoVariable/update-costo-variable/update-costo-variable.component';
import { DeleteCostoVariableComponent } from './pages/main-task/components/sa-modals/costoVariable/delete-costo-variable/delete-costo-variable.component';
import { CreateCostoVariableComponent } from './pages/main-task/components/sa-modals/costoVariable/create-costo-variable/create-costo-variable.component';
import { CreateCostoFijoComponent } from './pages/main-task/components/sa-modals/costoFijo/create-costo-fijo/create-costo-fijo.component';
import { UpdateCostoFijoComponent } from './pages/main-task/components/sa-modals/costoFijo/update-costo-fijo/update-costo-fijo.component';
import { DeleteCostoFijoComponent } from './pages/main-task/components/sa-modals/costoFijo/delete-costo-fijo/delete-costo-fijo.component';

@NgModule({
  declarations: [
    MainTaskComponent,
    NavbarComponent,
    FooterComponent,
    CostosFijosComponent,
    CostosVariablesComponent,
    UpdateCostoVariableComponent,
    DeleteCostoVariableComponent,
    CreateCostoVariableComponent,
    CreateCostoFijoComponent,
    UpdateCostoFijoComponent,
    DeleteCostoFijoComponent,
  ],
  imports: [CommonModule, TaskRoutingModule, ReactiveFormsModule],
  exports: [MainTaskComponent, NavbarComponent, FooterComponent],
})
export class TaskModule {}
