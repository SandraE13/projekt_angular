import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { HeaderUserComponent } from './Header/header-user/header-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
