import { BaseService } from '@my-lib/core/my-service';

const mockService = {
  foo: () => 'mock bar'
};

// First, initialize the Angular testing environment.

const testProviders = [
  { provide: BaseService, useFactory: () => mockService }
];

export default testProviders;
