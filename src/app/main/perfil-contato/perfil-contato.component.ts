import { Component } from '@angular/core';
import { Contato } from '../shared/model/contato.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-contato',
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css'
})
export class PerfilContatoComponent {

  public contato: Contato = {
    id: 1,
    nome: 'Thayná',
    telefone: '(18)998765432',
    email: 'thayna@gmail.com',
    aniversario: '27/10/2000',
    redes: '',
    observacoes: '',
    avatar: '',
  }

  constructor(
    private router: Router
  ) {}

  public excluirContato() {

  }

  public redirectTo(path: string): void {
    this.router.navigate([path]);
  }
}
