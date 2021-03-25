import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';

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
  myForm: FormGroup;

  id = new FormControl('', [Validators.required]);
  titulo = new FormControl('', [Validators.required]);
  preco = new FormControl('', [Validators.required, Validators.min(1)]);
  precoDesconto = new FormControl('', [Validators.required, Validators.min(1)]);
  loja = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (
      this.id.hasError('required') ||
      this.titulo.hasError('required') ||
      this.preco.hasError('required') ||
      this.precoDesconto.hasError('required') ||
      this.loja.hasError('required')
    ) {
      return 'Campo obrigatório';
    }
  }

  lojas = [
    { id: 1, nome: 'Epic' },
    { id: 2, nome: 'Origin' },
    { id: 3, nome: 'Steam' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.submitForm();
  }

  submitForm() {
    console.log(this.myForm.value);
  }
}
