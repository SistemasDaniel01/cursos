import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Components */
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { AppRoutingModule } from './app-routing.module';
import { CursotComponent } from './cursot/cursot.component';
import { CarritoComponent } from './carrito/carrito.component';
import { RegistroComponent } from './registro/registro.component';
import { MessageboxComponent } from './messagebox/messagebox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

import{HttpClientModule} from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { ProduclistComponent } from './produclist/produclist.component';
import { ProductitemComponent } from './productitem/productitem.component';
import { CartitemComponent } from './cartitem/cartitem.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalComponent } from './modal/modal.component';

/* Modules */
import { ShareModule } from './share/share.module';

/* services */
import { CargarScriptsService } from './cargar-scripts.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardsComponent,
    ModalComponent,
    CursotComponent,
    CarritoComponent,
    RegistroComponent,
    CartitemComponent,
    MessageboxComponent,
    ProduclistComponent,
    ProductitemComponent,
  ],
  imports: [
    NgbModule,
    ShareModule,
    FormsModule,
    BrowserModule,
    NgxPayPalModule,
    MatDialogModule,
    NgxSpinnerModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [CargarScriptsService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents:[MessageboxComponent],
})
export class AppModule { }
