import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancasComponent } from './financas.component';
import { ContaDetalheComponent } from './conta-detalhe/conta-detalhe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FinancasComponent, ContaDetalheComponent]
})
export class FinancasModule { }
