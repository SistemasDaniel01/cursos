import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CardsComponent } from './cards/cards.component';
import { AppComponent } from './app.component';
import { CursotComponent } from './cursot/cursot.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: CardsComponent },
  { path: 'curso', component: CursotComponent },
  { path: 'carro', component: CarritoComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'login', component: LoginComponent},
  {
    path: '',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: 'dashboard',
   loadChildren: () =>
   import('./features/dashboard/dashboard.module').then(m => m.DashboardModule) },
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
