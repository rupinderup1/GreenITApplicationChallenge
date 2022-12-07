import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { UserService } from './user.service';
import { User } from '../model/user';

const mockBook1: User = {
  isSelected: false,
  id: 1,
  name: "string",
  state: "string",
  zip: "string",
  amount: "string",
  qty: "string",
  item: "string",
  isEdit: true
};

const mockBook2: User = {
  isSelected: false,
  id: 1,
  name: "string",
  state: "string",
  zip: "string",
  amount: "string",
  qty: "string",
  item: "string",
  isEdit: true
};

const mockBook3: User = {
  isSelected: false,
  id: 1,
  name: "string",
  state: "string",
  zip: "string",
  amount: "string",
  qty: "string",
  item: "string",
  isEdit: true
};

describe('UserService', () => {
  let service: UserService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UserService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should call getAllUsers and return an array of Users', () => {
    service.getUsers().subscribe((res) => {
      expect(res.length).toBe(3);
    });
  });


  it('should call updateUser and return the updated user from the API', () => {
    const updatedUser: User = {
      isSelected: false,
      id: 1,
      name: "string",
      state: "string",
      zip: "string",
      amount: "string",
      qty: "string",
      item: "string",
      isEdit: true
    };

    service.updateUser(mockBook1).subscribe((data) => {
      expect(data).toEqual(mockBook1);
    });
  });


  it('should call addUser and the API should return the user that was added', () => {
    service.addUser(mockBook2).subscribe((data) => {
      expect(data).toEqual(mockBook2);
    });
  });


  it('should call deleteUser and return the user that was deleted from the API', () => {
    service.deleteUser(1).subscribe((data) => {
      expect(data).toEqual(mockBook3);
    });
  });
});