import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@kixplat/web';

@Component({
  selector: 'ki-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
