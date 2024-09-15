import { Component, OnInit } from '@angular/core';
import { Contato } from '../shared/model/contato.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoConsultaDTO } from '../shared/model/contato.consulta.model';
import { ContatoService } from '../shared/service/contato.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-perfil-contato',
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css'
})
export class PerfilContatoComponent implements OnInit {

  public contato: ContatoConsultaDTO = new ContatoConsultaDTO();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contatoService: ContatoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.contatoService.getContatoById(params['id']).subscribe(contato => this.contato = contato)
    })
  }

  public excluirContato() {
    let resposta = confirm('Confirma exclusão do contato '+this.contato.nome+'?');
    if(resposta) {
      this.contatoService.deletarContato(this.contato.id).subscribe(() => {
        alert(this.contato.nome+' excluído com sucesso!')
        this.redirectTo('');
      },
      (httpError: HttpErrorResponse) => alert(httpError.error.message));
    }
  }

  public redirectTo(path: string): void {
    this.router.navigate([path]);
  }
}
