import { CardsComponent } from './cards/cards.component';
import { AppComponent } from './app.component';
import { CursotComponent } from './cursot/cursot.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: CardsComponent },
  { path: 'curso', component: CursotComponent },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
