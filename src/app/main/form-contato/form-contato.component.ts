import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-contato',
  templateUrl: './form-contato.component.html',
  styleUrl: './form-contato.component.css'
})
export class FormContatoComponent implements OnInit {
  public contatoForm: FormGroup;

  constructor(
    private router: Router
  ) {}

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

  public salvarContato(): void {

  }

  public cleanFormGroup(): void {
    this.contatoForm.reset();
  }

  public validarCampo(campo: string): boolean {
    const control = this.contatoForm!.get(campo);
    return !control!.valid && (control!.dirty || control!.touched);
  }

  public redirectTo(path: string): void {
    this.router.navigate([path]);
  }

}
