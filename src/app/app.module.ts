import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './navbar/banner/banner.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { QuoteComponent } from './quote/quote.component';
import { ServicesComponent } from './services/services.component';
import { IconsModule } from './icons/icons.module';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    JumbotronComponent,
    QuoteComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
