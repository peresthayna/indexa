import { Component, OnInit } from '@angular/core';
import { Contato } from '../../main/shared/model/contato.model';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent implements OnInit {
	public alfabeto: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  	public contato: Contato = new Contato();
  	public busca: string = '';

    ngOnInit(): void {
        this.contato.nome = 'Thayná';
        this.contato.telefone = '+55 18 998765432';
    }

    //filtrar contatos por letra inicial
    //filtrar contatos por busca (remover acentos primeiro e colocar em minúsculas)
}
