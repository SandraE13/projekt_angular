import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { HeaderUserComponent } from './Header/header-user/header-user.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { ProjektFormularComponent } from './projekt-formular/projekt-formular.component';
import { AppService } from './app.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderUserComponent,
    SideMenuComponent,
    MainWindowComponent,
    ProjektFormularComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
