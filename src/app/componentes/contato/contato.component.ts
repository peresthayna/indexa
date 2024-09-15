import { Component, Input } from '@angular/core';
import { Contato } from '../../main/shared/model/contato.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
	@Input() contato: Contato;

  constructor(
    private router: Router
  ) {}

  public redirectTo(path: string): void {
    this.router.navigate([path]);
  }

  public deletarContato(id: number): void {

  }
}
