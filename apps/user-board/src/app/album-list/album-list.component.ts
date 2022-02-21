import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  UserService,
  AlbumObj
} from '../services/user.service';

@Component({
  selector: 'cowen-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  userId: number;
  albumList: AlbumObj[] = [];
  loadStatus = '';

  constructor (
    private userService: UserService,
    activatedRoute: ActivatedRoute,
  ) {
    this.userId = Number(activatedRoute.snapshot.paramMap.get("id"))
  }

  ngOnInit(): void {
    this.userService.getAlbumsForUser(this.userId)
    .subscribe({ 
      next: (albumList) => {
      this.albumList = albumList;
      this.loadStatus = 'success';
     },
     error: () => {
      this.loadStatus = 'error';
     }
    });
  }
}
