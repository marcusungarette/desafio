import { Component, OnInit } from '@angular/core';

export interface Oferta {
  id: number;
  titulo: string;
  preco: string;
  precoDesconto: string;
  loja: number;
  descricao: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'adm-game-tracker';

  message: string;
  listaFinal: Array<Oferta>;

  updateList(lista) {
    window.localStorage.setItem('ofertas-game-tracker', JSON.stringify(lista));
  }

  ngOnInit(): void {
    this.listaFinal = [];
  }

  receiveMessage($event) {
    const oferta: Oferta = {
      id: parseInt($event.id),
      titulo: $event.titulo,
      preco: $event.preco,
      precoDesconto: $event.precoDesconto,
      loja: $event.loja,
      descricao: $event.descricao,
    };

    this.listaFinal.push(oferta);

    this.updateList(this.listaFinal);
  }
}
