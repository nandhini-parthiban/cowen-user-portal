import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync
} from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { activatedRouteMock } from '../../test-mocks/route.mock';
import {
  mockPhotoList,
  UserServiceMock
} from '../../test-mocks/user.service.mock';

import { UserService } from '../services/user.service';

import { PhotoListComponent } from './photo-list.component';

describe('PhotoListComponent', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoListComponent ],
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
    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch photoList and populate the cards with correct data', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(component.photoList).toEqual(mockPhotoList);
      fixture.detectChanges();
      const image = fixture.nativeElement.querySelectorAll('img');
      expect(image[0].src).toBe(mockPhotoList[0].thumbnailUrl);
      expect(image[1].src).toBe(mockPhotoList[1].thumbnailUrl);
    });
  }));
});
