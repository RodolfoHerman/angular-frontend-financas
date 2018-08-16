import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancasService } from '../financas/financas.service';

@NgModule({
  providers: [
    FinancasService
  ]
})
export class CoreModule { }
