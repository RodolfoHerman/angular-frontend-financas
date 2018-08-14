import { Component, OnInit } from '@angular/core';
import { Conta } from './conta.model';

@Component({
  selector: 'mt-financas',
  templateUrl: './financas.component.html'
})
export class FinancasComponent implements OnInit {

  contas: Conta[] = [
    {
      id: 1,
      descricao: "Luz",
      valorFatura: 55.0,
      dataVencimento: "2018-08-11",
      status: "Pendente"
    },
    {
      id: 2,
      descricao: "Água",
      valorFatura: 20.0,
      dataVencimento: "2018-08-05",
      status: "Pendente"
    },
    {
      id: 3,
      descricao: "Telefone",
      valorFatura: 200.0,
      dataVencimento: "2018-08-22",
      status: "Pendente"
    },
    {
      id: 4,
      descricao: "Gás",
      valorFatura: 30.0,
      dataVencimento: "2018-08-10",
      status: "Pendente"
    }
  ]
  
  constructor() { }

  ngOnInit() {

  }

}
