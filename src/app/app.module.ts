import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WebSocketService } from './services/web-socket.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { PokerComponent } from './poker/poker.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    HomeComponent,
    SettingsComponent,
    PokerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [WebSocketService],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
