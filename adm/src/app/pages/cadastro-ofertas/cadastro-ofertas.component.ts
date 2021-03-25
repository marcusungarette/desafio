import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Oferta } from 'src/app/models';

export interface lojas {
  id: number;
  nome: string;
}

@Component({
  selector: 'app-cadastro-ofertas',
  templateUrl: './cadastro-ofertas.component.html',
  styleUrls: ['./cadastro-ofertas.component.scss'],
})
export class CadastroOfertasComponent implements OnInit {
  @Input() message: Oferta;
  @Output() messageEvent: EventEmitter<Oferta> = new EventEmitter<Oferta>();

  form: FormGroup;

  id = new FormControl('', [Validators.required]);
  titulo = new FormControl('', [Validators.required]);
  preco = new FormControl('', [Validators.required, Validators.min(1)]);
  precoDesconto = new FormControl('', [Validators.required, Validators.min(1)]);
  loja = new FormControl('', [Validators.required]);
  descricao = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (
      this.id.hasError('required') ||
      this.titulo.hasError('required') ||
      this.preco.hasError('required') ||
      this.precoDesconto.hasError('required') ||
      this.loja.hasError('required') ||
      this.descricao.hasError('required')
    ) {
      return 'Campo obrigatório';
    }
  }

  lojas = [
    { id: 1, nome: 'Epic' },
    { id: 2, nome: 'Origin' },
    { id: 3, nome: 'Steam' },
  ];

  constructor(public formBuilder: FormBuilder, public router: Router) {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      id: this.id,
      titulo: this.titulo,
      preco: this.preco,
      precoDesconto: this.precoDesconto,
      loja: this.loja,
      descricao: this.descricao,
    });
  }

  ngOnInit(): void {}

  submitForm() {
    const message = this.form.value;
    this.messageEvent.emit(message);
    this.form.reset('');
    this.router.navigate(['/nossasofertas']);
    alert('Oferta salva');
  }
}
