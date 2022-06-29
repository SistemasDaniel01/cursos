import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CargarScriptsService } from './cargar-scripts.service';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CardsComponent } from './cards/cards.component';
import { AppRoutingModule } from './app-routing.module';
import { CursotComponent } from './cursot/cursot.component';
import { CarritoComponent } from './carrito/carrito.component';
import { RegistroComponent } from './registro/registro.component';
import { MessageboxComponent } from './messagebox/messagebox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';




// other imports



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CardsComponent,
    CursotComponent,
    CarritoComponent,
    RegistroComponent,
    MessageboxComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule


  ],
  providers: [CargarScriptsService],
  bootstrap: [AppComponent],
  entryComponents:[MessageboxComponent],


})
export class AppModule { }
