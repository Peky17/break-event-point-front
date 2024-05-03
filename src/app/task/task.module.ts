import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TaskRoutingModule } from './task-routing.module';
import { MainTaskComponent } from './pages/main-task/main-task.component';
import { NavbarComponent } from './pages/main-task/shared/navbar/navbar.component';
import { FooterComponent } from './pages/main-task/shared/footer/footer.component';
import { CostosFijosComponent } from './pages/main-task/components/costos-fijos/costos-fijos.component';
import { CostosVariablesComponent } from './pages/main-task/components/costos-variables/costos-variables.component';


@NgModule({
  declarations: [
    MainTaskComponent,
    NavbarComponent,
    FooterComponent,
    CostosFijosComponent,
    CostosVariablesComponent,
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    MainTaskComponent,
    NavbarComponent,
    FooterComponent,
  ]
})
export class TaskModule { }
