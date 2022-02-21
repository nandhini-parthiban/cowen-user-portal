import {
  Component,
  OnDestroy
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  NgxFileDropEntry,
  FileSystemFileEntry
} from 'ngx-file-drop';
import { UserService } from '../services/user.service';

@Component({
  selector: 'cowen-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.scss']
})
export class CreateAlbumComponent implements OnDestroy {
  albumform: FormGroup;
  userId: number;
  photos: NgxFileDropEntry[] = [];
  albumStatus = '';

  constructor (
    fb: FormBuilder,
    activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.userId = Number(activatedRoute.snapshot.paramMap.get("id"))
    this.albumform = fb.group({
      name: ['', Validators.required]
    });
  }

  dropped(files: NgxFileDropEntry[]) {
    this.photos = files;
  }

  onCreate () {
    if(this.albumform.valid) {
      const formData = new FormData();
      if(this.photos.length) {
         // supports only one file entry as of now.    
        const fileEntry = this.photos[0].fileEntry as FileSystemFileEntry;
        const fileName = this.photos[0].relativePath
        const formData = new FormData();
        fileEntry.file((file: File) => {
          formData.append(fileName, file)
        });
      }
      this.albumStatus = 'progress';
      this.userService.createPhotoAlbum(this.albumform.getRawValue().value, formData)
        .subscribe({ 
          next: () => {
          this.albumStatus = 'created';
        },
        error: () => {
          this.albumStatus = 'error';
        }
      });
    }
  }

  ngOnDestroy (): void {
    this.photos = []
  }
}
