import { Injectable } from "@angular/core";
import {
    Observable,
    map
} from "rxjs";
import { HttpService } from "./http.service";

export interface CompanyObj {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface GeoObj {
    lat: string;
    lng: string;
}

export interface AddressObj {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoObj;
}

export interface UserObj {
    id: number;
    name: string
    username: string
    email: string;
    address: AddressObj;
    phone: string;
    website: string;
    company: CompanyObj;
}

export interface AlbumObj {
    userId: number;
    id: number;
    title: string;
}

export interface PhotoObj {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

/**
 *User List service
 */
@Injectable()
export class UserService {
    constructor (
        private http: HttpService
    ) {}

    getUsers (): Observable<UserObj[]> {
        return this.http.get('users')
        .pipe(map((result:UserObj[])=> result || []));
    }

    getAlbumsForUser (
        userId: number
    ): Observable<AlbumObj[]> {
        return this.http.get('albums')
        .pipe(map((albums:AlbumObj[])=> {
            return albums.filter((album) => album.userId === userId) || []
        }));
    }

    getPhotosForAlbum (
        albumId: number
    ) : Observable<PhotoObj[]> {
        return this.http.get('photos')
        .pipe(map((photos:PhotoObj[])=> {
            return photos.filter((photo) => photo.albumId === albumId)
        }));
    }

    createPhotoAlbum (
        albumName: string,
        formData: FormData
    ) {
        return this.http.post('albums', {
            name: albumName,
            files: formData
        });
    }
}
