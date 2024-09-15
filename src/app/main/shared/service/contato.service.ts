import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContatoConsultaDTO } from '../model/contato.consulta.model';
import { ContatoCadastroDTO } from '../model/contato.cadastro.model';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private readonly URL: string = 'http://127.0.0.1:8080/contato';

  constructor(private http: HttpClient) { }

  public getContatos(): Observable<ContatoConsultaDTO[]> {
    return this.http.get<ContatoConsultaDTO[]>(this.URL);
  }

  public getContatoById(id: number): Observable<ContatoConsultaDTO> {
    return this.http.get<ContatoConsultaDTO>(this.URL+'/'+id);
  }

  public getContatosBySearch(search: string): Observable<ContatoConsultaDTO[]> {
    return this.http.get<ContatoConsultaDTO[]>(this.URL+'/busca/'+search);
  }

  public getContatosByLetter(letter: string): Observable<ContatoConsultaDTO[]> {
    return this.http.get<ContatoConsultaDTO[]>(this.URL+'/letra/'+letter);
  }

  public cadastrarContato(contato: ContatoCadastroDTO): Observable<ContatoConsultaDTO> {
    return this.http.post<ContatoConsultaDTO>(this.URL, contato);
  }

  public atualizarContato(id: number, contato: ContatoConsultaDTO): Observable<ContatoConsultaDTO> {
    return this.http.put<ContatoConsultaDTO>(this.URL+'/'+id, contato);
  }

  public deletarContato(id: number): Observable<void> {
    return this.http.delete<void>(this.URL+'/'+id);
  }

}
