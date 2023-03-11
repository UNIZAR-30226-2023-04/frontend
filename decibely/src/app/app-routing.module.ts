import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { PaginaInipruebaComponent } from './pagina-iniprueba/pagina-iniprueba.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'audio-player', component: AudioPlayerComponent },
  { path: 'pagina-iniprueba', component: PaginaInipruebaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }