import { UserService } from './services/user.service';
import { ContentService } from './services/content.service';
import { AuthActivate } from './guards/auth.activate';
import { RouterModule } from '@angular/router';
import { NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    AuthActivate,
    UserService,
    ContentService
  ]
})
export class CoreModule { }
