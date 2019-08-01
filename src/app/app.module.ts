import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BoxComponent } from './box/box.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadercomponentComponent,
    SidebarComponent,
    FooterComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
