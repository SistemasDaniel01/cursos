import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Components */
import { FormsModule } from '@angular/forms';
import { NgxPayPalModule } from 'ngx-paypal';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { MatDialogModule } from '@angular/material/dialog';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* My Components */
import { ModalComponent } from './modal/modal.component';
import { LoginComponent } from './login/login.component';
import { CursotComponent } from './cursot/cursot.component';
import { CarritoComponent } from './carrito/carrito.component';
import { RegistroComponent } from './registro/registro.component';
import { CartitemComponent } from './cartitem/cartitem.component';
import { MessageboxComponent } from './messagebox/messagebox.component';
import { ProduclistComponent } from './produclist/produclist.component';
import { ProductitemComponent } from './productitem/productitem.component';

/* services */
import { CargarScriptsService } from './services/load-scripts/cargar-scripts.service';

/* Modules */
import { PagesModule } from './pages/pages.module';
import { ShareModule } from './share/share.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
    FormsModule,
    BrowserModule,
    NgxPayPalModule,
    MatDialogModule,
    NgxSpinnerModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PagesModule,
    ShareModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [CargarScriptsService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [MessageboxComponent],
})
export class AppModule { }
