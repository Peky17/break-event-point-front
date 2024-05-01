import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TaskRoutingModule } from './task-routing.module';
import { MainTaskComponent } from './pages/main-task/main-task.component';
import { NavbarComponent } from './pages/main-task/shared/navbar/navbar.component';
import { FooterComponent } from './pages/main-task/shared/footer/footer.component';


@NgModule({
  declarations: [
    MainTaskComponent,
    NavbarComponent,
    FooterComponent,
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
