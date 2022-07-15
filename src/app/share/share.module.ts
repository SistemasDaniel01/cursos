import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Components */
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SimpleNavComponent } from './components/simple-nav/simple-nav.component';
import { SimpleFooterComponent } from './components/simple-footer/simple-footer.component';
import { SimpleHeaderComponent } from './components/simple-header/simple-header.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SimpleNavComponent,
    SimpleFooterComponent,
    SimpleHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SimpleNavComponent,
    SimpleFooterComponent,
    SimpleHeaderComponent
  ]
})
export class ShareModule { }
