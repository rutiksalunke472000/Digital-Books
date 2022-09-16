import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookFormComponent } from './book-form/book-form.component';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { AddBookComponent } from './add-book/add-book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes=[
  {path:'digitalbooks', component:AddBookComponent },
  {path:'search', component:BookFormComponent },
  {path:'Welcome', component:WelcomeComponent }
]
@NgModule({
  declarations: [
    
    AppComponent,
    BookFormComponent,
    AddBookComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule, MatButtonModule, MatToolbarModule, MatIconModule,
    AppRoutingModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes), Ng2SearchPipeModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
