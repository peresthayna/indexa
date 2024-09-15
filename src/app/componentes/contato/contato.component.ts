import { Component, Input } from '@angular/core';
import { Contato } from '../../main/shared/model/contato.model';
import { Router } from '@angular/router';
import { ContatoService } from '../../main/shared/service/contato.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ContatoConsultaDTO } from '../../main/shared/model/contato.consulta.model';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
	@Input() contato: ContatoConsultaDTO;

  constructor(
    private router: Router,
    private contatoService: ContatoService
  ) {}

  public redirectTo(path: string): void {
    this.router.navigate([path]);
  }

  public deletarContato(contato: Contato): void {
    let resposta = confirm('Confirma exclusão do contato '+contato.nome+'?');
    if(resposta) {
      this.contatoService.deletarContato(contato.id).subscribe(() => {
        alert(contato.nome+' excluído com sucesso!')
        window.location.reload();
      },
      (httpError: HttpErrorResponse) => alert(httpError.error.message));
    }
  }
}
