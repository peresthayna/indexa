import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-contato',
  templateUrl: './form-contato.component.html',
  styleUrl: './form-contato.component.css'
})
export class FormContatoComponent implements OnInit {
  public contatoForm!: FormGroup;

  ngOnInit(): void {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl('')
    })
  }

  //salvar contato (ngSubmit)="salvarContato()"

  public cleanFormGroup(): void {
    this.contatoForm.reset();
  }

  public validarCampo(campo) {
    return !campo.valid && campo.touched;
  }

  aplicarCss(campo) {
    return {
      'has-error': this.validarCampo(campo),
      'has-feedback': this.validarCampo(campo)
    }
  }

}
