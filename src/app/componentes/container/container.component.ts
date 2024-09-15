import { Component, Input, OnInit } from '@angular/core';
import { Contato } from '../../main/shared/model/contato.model';
import { Router } from '@angular/router';
import { ContatoService } from '../../main/shared/service/contato.service';
import { debounceTime, Subject, switchMap } from 'rxjs';
import { ContatoConsultaDTO } from '../../main/shared/model/contato.consulta.model';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent implements OnInit {
  public busca: string = '';
  public contatos: { [key: string]: ContatoConsultaDTO[] } = {};
  public searchSubject = new Subject<string>();

  constructor(private router: Router, private contatoService: ContatoService) {}

  ngOnInit(): void {
    this.getContatos();
    this.setupSearch();
  }

  private setContatosMap(contatos: ContatoConsultaDTO[]) {
    this.contatos = {};
    for (const contato of contatos) {
      const firstLetter = contato.nome.charAt(0).toUpperCase();
      if (this.contatos[firstLetter]) {
        this.contatos[firstLetter].push(contato);
      } else {
        this.contatos[firstLetter] = [contato];
      }
    }
  }

  public setupSearch(): void {
    this.searchSubject
      .pipe(
        debounceTime(500),
        switchMap((busca) => this.contatoService.getContatosBySearch(busca))
      )
      .subscribe((contatos) => {
        this.setContatosMap(contatos);
      });
  }

  public onSearchChange(): void {
    if (this.busca == '') {
      this.getContatos();
    } else {
      this.searchSubject.next(this.busca);
    }
  }

  public getContatos(): void {
    this.contatoService.getContatos().subscribe((contatos) => {
      this.setContatosMap(contatos);
    });
  }

  public redirectTo(path: string) {
    this.router.navigate([path]);
  }
}
