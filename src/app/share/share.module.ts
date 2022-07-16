import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Components */
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SimpleNavComponent } from './simple-nav/simple-nav.component';
import { SimpleFooterComponent } from './simple-footer/simple-footer.component';
import { SimpleHeaderComponent } from './simple-header/simple-header.component';

@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    HeaderComponent,
    SimpleNavComponent,
    SimpleFooterComponent,
    SimpleHeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent,
    FooterComponent,
    HeaderComponent,
    SimpleNavComponent,
    SimpleFooterComponent,
    SimpleHeaderComponent
  ]
})
export class ShareModule { }
