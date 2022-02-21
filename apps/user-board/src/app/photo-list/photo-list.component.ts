import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  PhotoObj,
  UserService
} from '../services/user.service';

@Component({
  selector: 'cowen-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  albumId: number;
  photoList: PhotoObj[] = [];
  loadStatus = '';

  constructor (
    private userService: UserService,
    activatedRoute: ActivatedRoute,
  ) {
    this.albumId = Number(activatedRoute.snapshot.paramMap.get("id"))
  }

  ngOnInit(): void {
    this.userService.getPhotosForAlbum(this.albumId)
    .subscribe({ 
      next: (photoList) => {
      this.photoList = photoList;
      this.loadStatus = 'success';
     },
     error: () => {
      this.loadStatus = 'error';
     }
    });
  }
}
