import { NgModule } from '@angular/core';
import {
  RouterModule,
   Routes
} from '@angular/router';

// Components
import { UserListComponent } from './user-list/user-list.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { PhotoListComponent } from './photo-list/photo-list.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
