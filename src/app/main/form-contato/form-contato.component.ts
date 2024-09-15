import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contato } from '../shared/model/contato.model';

@Component({
  selector: 'app-form-contato',
  templateUrl: './form-contato.component.html',
  styleUrl: './form-contato.component.css'
})
export class FormContatoComponent implements OnInit {
  public contatoForm: FormGroup;
  public idParam: number = 0;
  public isUpdate: boolean = false;
  public contato: Contato = new Contato();
  public imagemSelecionada: string = 'assets/user.png';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['id'] != 0) {
        this.idParam = params['id'];
        this.isUpdate = true;
        //get contato by id
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
    //salvar se novo, se não atualiza
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
