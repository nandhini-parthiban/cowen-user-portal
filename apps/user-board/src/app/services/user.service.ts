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
}
