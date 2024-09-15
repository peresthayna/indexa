import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contato } from '../shared/model/contato.model';
import { ContatoService } from '../shared/service/contato.service';
import { ContatoConsultaDTO } from '../shared/model/contato.consulta.model';
import { ContatoCadastroDTO } from '../shared/model/contato.cadastro.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-form-contato',
  templateUrl: './form-contato.component.html',
  styleUrl: './form-contato.component.css'
})
export class FormContatoComponent implements OnInit {
  public contatoForm: FormGroup;
  public idParam: number = 0;
  public isUpdate: boolean = false;
  public imagemSelecionada: string = 'assets/user.png';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contatoService: ContatoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['id'] != 0) {
        this.idParam = params['id'];
        this.isUpdate = true;
        console.log(this.idParam)
      }
    })
    this.iniciarFormulario();
  }

  public iniciarFormulario(): void {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl('')
    })
  }

  public onFileSelect(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsDataURL(file);
    }
  }

  handleReaderLoaded(e: any) {
    this.imagemSelecionada = e.target.result;
  }

  public salvarContato(): void {
    if(this.isUpdate) {
      let contatoConsulta: ContatoConsultaDTO = new ContatoConsultaDTO();
      contatoConsulta.id = this.idParam;
      contatoConsulta.nome = this.contatoForm!.get('nome')?.value;
      contatoConsulta.telefone = this.contatoForm!.get('telefone')?.value;
      contatoConsulta.email = this.contatoForm!.get('email')?.value;
      contatoConsulta.avatar = this.imagemSelecionada;
      contatoConsulta.aniversario = this.contatoForm!.get('aniversario')?.value;
      contatoConsulta.redes = this.contatoForm!.get('redes')?.value;
      contatoConsulta.observacoes = this.contatoForm!.get('observacoes')?.value;
      this.contatoService.atualizarContato(this.idParam, contatoConsulta).subscribe((contato) => {
        this.redirectTo('perfil-contato/'+contato.id);
      },
      (httpError: HttpErrorResponse) => alert(httpError.error.message));
    } else {
      let contatoCadastro: ContatoCadastroDTO = new ContatoCadastroDTO();
      contatoCadastro.nome = this.contatoForm!.get('nome')?.value;
      contatoCadastro.telefone = this.contatoForm!.get('telefone')?.value;
      contatoCadastro.email = this.contatoForm!.get('email')?.value;
      contatoCadastro.avatar = this.imagemSelecionada;
      contatoCadastro.aniversario = this.contatoForm!.get('aniversario')?.value;
      contatoCadastro.redes = this.contatoForm!.get('redes')?.value;
      contatoCadastro.observacoes = this.contatoForm!.get('observacoes')?.value;
      this.contatoService.cadastrarContato(contatoCadastro).subscribe((contato) => {
        this.redirectTo('perfil-contato/'+contato.id);
      },
      (httpError: HttpErrorResponse) => alert(httpError.error.message));
    }
  }

  public cleanFormGroup(): void {
    if(this.isUpdate) {
      this.redirectTo('');
    } else {
      this.contatoForm.reset();
      this.imagemSelecionada = 'assets/user.png';
    }
  }

  public validarCampo(campo: string): boolean {
    const control = this.contatoForm!.get(campo);
    return !control!.valid && (control!.dirty || control!.touched);
  }

  public redirectTo(path: string): void {
    this.router.navigate([path]);
  }

}
