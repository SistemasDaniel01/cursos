import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CardsComponent } from './cards/cards.component';
import { AppComponent } from './app.component';
import { CursotComponent } from './cursot/cursot.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo,redirectLoggedInTo, } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [
  { path: 'home', component: CardsComponent },
  { path: 'curso', component: CursotComponent,canActivate: [AuthGuard],
  data: { authGuardPipe: redirectUnauthorizedToLogin }, },
  { path: 'carro', component: CarritoComponent,canActivate: [AuthGuard],
  data: { authGuardPipe: redirectUnauthorizedToLogin },},
  { path: 'registro', component: RegistroComponent},
  { path: 'login', component: LoginComponent},
  {
    path: '',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
      canActivate: [AuthGuard],
      data: { authGuardPipe: redirectLoggedInToHome },
  },
  { path: 'dashboard',
   loadChildren: () =>
   import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
   canActivate: [AuthGuard],
   data: { authGuardPipe: redirectUnauthorizedToLogin }, },
   {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
