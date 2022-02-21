import { NgModule } from '@angular/core';
import {
  RouterModule,
   Routes
} from '@angular/router';

// Components
import { UserListComponent } from './user-list/user-list.component';
import { AlbumListComponent } from './album-list/album-list.component';

export const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: 'albums/:id',
    component: AlbumListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
