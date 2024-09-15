import { Component, Input, OnInit } from '@angular/core';
import { Contato } from '../../main/shared/model/contato.model';
import { Router } from '@angular/router';
import { ContatoService } from '../../main/shared/service/contato.service';
import { debounceTime, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent implements OnInit {

  public alfabeto: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  public busca: string = '';
  public contatos: { [key: string]: Contato[] } = {};
  public searchSubject = new Subject<string>();

  constructor(
    private router: Router,
    private contatoService: ContatoService
  ) {}

  ngOnInit(): void {
    this.getContatos();
    this.setupSearch();
  }

  public setupSearch(): void {
    this.searchSubject.pipe(
      debounceTime(500),
      switchMap(busca => this.contatoService.getContatosBySearch(busca))
    ).subscribe(contatos => {
      this.contatos = {};
      contatos.forEach(contato => {
        const letra = contato.nome.charAt(0).toUpperCase();
        if (!this.contatos[letra]) {
          this.contatos[letra] = [];
        }
        this.contatos[letra].push(contato);
      });
    });
  }

  public onSearchChange(): void {
    if(this.busca == '') {
      this.getContatos();
    } else {
      this.searchSubject.next(this.busca);
    }
  }

  public getContatos(): void {
    this.alfabeto.forEach((letra) => {
      this.contatoService.getContatosByLetter(letra).subscribe(contatos =>
        this.contatos[letra] = contatos
      );
    });
  }

  public redirectTo(path: string) {
    this.router.navigate([path]);
  }

}
