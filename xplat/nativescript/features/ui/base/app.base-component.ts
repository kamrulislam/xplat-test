import { Component } from '@angular/core';

// libs
import { BaseComponent } from '@kixplat/core';
import { AppService } from '@kixplat/nativescript/core';

export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
