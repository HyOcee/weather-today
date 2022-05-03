import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Reactive forms
import { ReactiveFormsModule } from '@angular/forms';

// http
import { MyHttpService } from './services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [MyHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
