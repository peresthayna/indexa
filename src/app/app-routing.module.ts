import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { FormContatoComponent } from './main/form-contato/form-contato.component';
import { PerfilContatoComponent } from './main/perfil-contato/perfil-contato.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'adicionar-contato/:id', component: FormContatoComponent },
  { path: 'perfil-contato/:id', component: PerfilContatoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
