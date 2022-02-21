import {
  Component,
  OnInit
} from '@angular/core';
import {
  UserService,
  UserObj
} from '../services/user.service';

@Component({
  selector: 'cowen-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  usersList: UserObj[] = [];
  loadStatus = '';

  constructor (
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe({ 
      next: (userslist) => {
      this.usersList = userslist;
      this.loadStatus = 'success';
     },
     error: () => {
      this.loadStatus = 'error';
     }
    });
  }
} 
