import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import {
  mockUsersList,
  UserServiceErrorMock,
  UserServiceMock
} from '../../test-mocks/user.service.mock';

import { UserService } from '../services/user.service';

import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      imports: [RouterTestingModule],
      providers: [
        {provide: UserService, useClass: UserServiceMock}
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch userList and populate the cards with correct data', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(component.usersList).toEqual(mockUsersList);
      fixture.detectChanges();
      const title = fixture.nativeElement.querySelectorAll('mat-card-title');
      expect(title[0].innerHTML).toBe(mockUsersList[0].name);
      expect(title[1].innerHTML).toBe(mockUsersList[1].name);
      expect(title[2].innerHTML).toBe(mockUsersList[2].name);
    });
  }));
});


describe('UserListComponent: With Error', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      imports: [RouterTestingModule],
      providers: [
        {provide: UserService, useClass: UserServiceErrorMock}
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
