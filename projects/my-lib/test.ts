import { BaseService } from '@my-lib';

const mockService = {
  foo: () => 'mock bar'
};

// First, initialize the Angular testing environment.

const testProviders = [
  { provide: BaseService, useFactory: () => mockService }
];

export default testProviders;
