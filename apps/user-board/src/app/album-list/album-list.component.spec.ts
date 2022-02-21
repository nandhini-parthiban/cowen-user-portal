import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

import { activatedRouteMock } from '../../test-mocks/route.mock';
import {
  mockAlbumList,
  UserServiceMock
} from '../../test-mocks/user.service.mock';

import { UserService } from '../services/user.service';

import { AlbumListComponent } from './album-list.component';

describe('AlbumListComponent', () => {
  let component: AlbumListComponent;
  let fixture: ComponentFixture<AlbumListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumListComponent ],
      imports: [RouterTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        {provide: UserService, useClass: UserServiceMock}
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch albumList and populate the cards with correct data', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(component.albumList).toEqual(mockAlbumList);
      fixture.detectChanges();
      const link = fixture.nativeElement.querySelectorAll('a');
      expect(link[0].innerHTML).toBe(mockAlbumList[0].title);
      expect(link[1].innerHTML).toBe(mockAlbumList[1].title);
    });
  }));
});
