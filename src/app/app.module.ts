import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './componentes/container/container.component';
import { HomeComponent } from './main/home/home.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import { FormContatoComponent } from './main/form-contato/form-contato.component';
import { RouterLink } from '@angular/router';
import { CampoErroComponent } from './componentes/campo-erro/campo-erro.component';
import { PerfilContatoComponent } from './main/perfil-contato/perfil-contato.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HomeComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
    FormContatoComponent,
    CampoErroComponent,
    PerfilContatoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterLink,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
