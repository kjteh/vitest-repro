import { Component, inject } from '@angular/core';
import { BaseService } from '@my-lib/core/my-service';

@Component({
  selector: 'lib-my-lib',
  imports: [],
  template: `
    <p>displayValue: {{ displayValue }}</p>
  `,
  styles: ``,
})
export class MyLib {
  protected readonly myService = inject(BaseService);
  protected displayValue = this.myService.foo();

  getVal() {
    return this.displayValue;
  }
}
