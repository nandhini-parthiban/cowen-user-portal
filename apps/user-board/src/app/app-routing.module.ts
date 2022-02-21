import { NgModule } from '@angular/core';
import {
  RouterModule,
   Routes
} from '@angular/router';

// Components
import { UserListComponent } from './user-list/user-list.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { CreateAlbumComponent } from './create-album/create-album.component';

export const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: 'albums/:id',
    component: AlbumListComponent
  },
  {
    path: 'photos/:id',
    component: PhotoListComponent
  },
  {
    path: 'createAlbum/:id',
    component: CreateAlbumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
