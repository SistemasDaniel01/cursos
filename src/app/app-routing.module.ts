import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components */
// import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
import { CursotComponent } from './cursot/cursot.component';
// import { CarritoComponent } from './carrito/carrito.component';
// import { RegistroComponent } from './registro/registro.component';
import { AuthGuard, redirectUnauthorizedTo, redirectLoggedInTo, } from '@angular/fire/auth-guard';

/* Pages */
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { StartComponent } from './pages/start/start.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { CoursesComponent } from './pages/courses/courses.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [
  {
    path: '',
    component: StartComponent
    // loadChildren: () =>
    //   import('./features/auth/auth.module').then((m) => m.AuthModule),
    // canActivate: [AuthGuard],
    // data: { authGuardPipe: redirectLoggedInToHome },
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'courses',
    component: CursotComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'login',
    loadChildren: () =>
    import('./features/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedInToHome },
  },
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
