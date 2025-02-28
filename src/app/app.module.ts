import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http';

// tslint:disable-next-line:comment-format
//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// tslint:disable-next-line:comment-format
//Rutas
import {RouterModule} from '@angular/router';
import { ROUTES } from './app.routes';
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';

// tslint:disable-next-line:comment-format
//Services


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistaComponent,
    SearchComponent,
    NavbarComponent,
    NoimagePipe,
    DomseguroPipe,
    TarjetasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
