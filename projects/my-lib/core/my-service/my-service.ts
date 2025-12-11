import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export abstract class BaseService {
  abstract foo(): string;
}

@Injectable({ providedIn: 'root' })
export class ChildService extends BaseService {

  // Comment the following injection to see the error disappear
  protected httpClient = inject(HttpClient);

  override foo(): string {
    return 'bar';
  }
}
