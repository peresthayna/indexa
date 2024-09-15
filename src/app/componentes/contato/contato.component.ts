import { Component, Input } from '@angular/core';
import { Contato } from '../../main/shared/model/contato.model';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
	@Input() contato: Contato;
}
