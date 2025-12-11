import { inject, Injectable } from "@angular/core";

@Injectable({ providedIn: 'root', useFactory: () => inject(ChildService) })
export abstract class BaseService {
  abstract foo(): string;
}

@Injectable({ providedIn: 'root' })
export class ChildService extends BaseService {

  override foo(): string {
    return 'bar';
  }
}
