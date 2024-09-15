import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { FormContatoComponent } from './main/form-contato/form-contato.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'adicionar-contato', component: FormContatoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
