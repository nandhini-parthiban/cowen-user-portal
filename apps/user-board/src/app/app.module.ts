import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

//Components
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
//Services
import { HttpService } from './services/http.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AlbumListComponent,
    PhotoListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
  ],
  providers: [
    HttpService,
    UserService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

