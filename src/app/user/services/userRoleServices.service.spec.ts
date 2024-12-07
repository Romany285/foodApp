/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserRoleServicesService } from './userRoleServices.service';

describe('Service: UserRoleServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserRoleServicesService]
    });
  });

  it('should ...', inject([UserRoleServicesService], (service: UserRoleServicesService) => {
    expect(service).toBeTruthy();
  }));
});
