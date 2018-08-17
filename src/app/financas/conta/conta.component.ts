import { Component, OnInit, Input } from '@angular/core';
import { Conta } from './conta.model';

@Component({
  selector: 'mt-conta',
  templateUrl: './conta.component.html'
})
export class ContaComponent implements OnInit {


  @Input() conta: Conta;

  constructor() { }

  ngOnInit() {
  }

  getIcon(): string {

    let temp = this.conta.descricao.toLocaleLowerCase();
    let icon: string;

    switch (temp) {
      
      case 'luz':
        
        icon = 'fa-bolt';
      break;
      
      case 'água' || 'agua':

        icon = 'fa-tint';
      break;

      case 'telefone':

        icon = 'fa-phone';
      break;

      case 'consórcio' || 'consorcio':

        icon = 'fa-car';
      break;

      case 'compra' || 'compras' || 'mercado':

        icon = 'fa-cart-arrow-down';
      break;

      default:

        icon = 'fa-money';
      break;
    }

    return icon;
  }

}
