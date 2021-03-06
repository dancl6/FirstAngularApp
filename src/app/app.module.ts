import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './components/button/button.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListItemsComponent,
    PostItemComponent,
    ButtonComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FontAwesomeModule,
    HttpClientModule, FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
