import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@kixplat/nativescript';

const MODULES = [
  UIModule
];

@NgModule({
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES,
  ]
})
export class SharedModule {}
