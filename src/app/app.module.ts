import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import {Routes, RouterModule} from  '@angular/router';

import { appRoot } from './app.routes';

import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BasicComponent } from './components/basic/basic.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { CmsComponent } from './components/cms/cms.component';
import { PhotosComponent } from './components/photos/photos.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BasicComponent,
    TodoListComponent,
    YoutubeComponent,
    CmsComponent,
    PhotosComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoot),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
