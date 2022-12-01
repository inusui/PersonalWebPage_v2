import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FooterComponent } from './pages/footer/footer.component';
import { BlogComponent } from './pages/blog/blog.component';
import { SocialBarComponent } from './pages/social-bar/social-bar.component';

// Primeng
import {SlideMenuModule} from 'primeng/slidemenu';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {ScrollTopModule} from 'primeng/scrolltop';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    BlogComponent,
    SocialBarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    SlideMenuModule,
    ButtonModule,
    ToolbarModule,
    ScrollTopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
