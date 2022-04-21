import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigazioneComponent } from './header/navigazione.component';
import { TitoloComponent } from './header/titolo.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './home/componentihome/banner.component';
import { IniziativeComponent } from './home/componentihome/iniziative.component';
import { StorieComponent } from './home/componentihome/storie.component';
import { AssociazioniComponent } from './home/componentihome/associazioni.component';
import { FrecciagiuComponent } from './frecciagiu.component';
import { ListainiziativeComponent } from './listainiziative/listainiziative.component';
import { ListaassociazioniComponent } from './listaassociazioni/listaassociazioni.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigazioneComponent,
    TitoloComponent,
    HomeComponent,
    InfoComponent,
    FooterComponent,
    BannerComponent,
    IniziativeComponent,
    StorieComponent,
    AssociazioniComponent,
    FrecciagiuComponent,
    ListainiziativeComponent,
    ListaassociazioniComponent
/*     HeaderComponent,
    NavigazioneComponent,
    TitoloComponent,
    HomeComponent,
    InfoComponent,
    FooterComponent,
    BannerComponent,
    IniziativeComponent,
    StorieComponent,
    AssociazioniComponent,
    FrecciagiuComponent,
    ListainiziativeComponent,
    ListaassociazioniComponent, */

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
