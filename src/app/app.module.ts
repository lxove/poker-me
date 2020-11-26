import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WebSocketService } from './services/web-socket.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [AppComponent, HighlightDirective, HomeComponent, SettingsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [WebSocketService],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
