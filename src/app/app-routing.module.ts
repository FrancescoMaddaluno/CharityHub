import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { ListainiziativeComponent } from './listainiziative/listainiziative.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'info', component: InfoComponent },
  { path: 'iniziative', component: ListainiziativeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
