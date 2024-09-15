import { Component, OnInit } from '@angular/core';
import { Contato } from '../../main/shared/model/contato.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent implements OnInit {
	public alfabeto: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  	public contato: Contato = new Contato();
  	public busca: string = '';

    constructor(
      private router: Router
    ) {}

    ngOnInit(): void {
        this.contato.id = 1;
        this.contato.nome = 'Thayná';
        this.contato.telefone = '+55 18 998765432';
        this.contato.email = 'thayna@gmail.com';
        this.contato.avatar = 'assets/user.png';
    }

    public redirectTo(path: string) {
      this.router.navigate([path]);
    }

    //filtrar contatos por busca (remover acentos primeiro e colocar em minúsculas)
}
