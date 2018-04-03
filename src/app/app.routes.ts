import {Routes, RouterModule} from  '@angular/router';

import {BasicComponent} from './components/basic/basic.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {CmsComponent} from './components/cms/cms.component';
import {YoutubeComponent} from './components/youtube/youtube.component';
import {PhotosComponent} from './components/photos/photos.component';
import {ContactUsComponent} from './components/contact-us/contact-us.component';

export const appRoot: Routes = [
    {
        path: '',
        component: BasicComponent
    },
    {
        path: 'todo-list',
        component: TodoListComponent
    },
    {
        path: 'cms',
        component: CmsComponent
    },
    {
        path: 'cms/:albumId',
        component: PhotosComponent
    },
    {
        path: 'youtube',
        component: YoutubeComponent
    },
    {
        path: 'contact',
        component: ContactUsComponent
    },
    {
        path: '**',
        component: BasicComponent
    }
]
