import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SelectBlackboxComponent } from './select-blackbox/select-blackbox.component';
import { SelectBlackboxService } from './services/select-blackbox.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    SelectBlackboxComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [SelectBlackboxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
