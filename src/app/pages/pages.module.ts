import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    HomeComponent,
    StartComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports: [ ]
})
export class PagesModule { }
