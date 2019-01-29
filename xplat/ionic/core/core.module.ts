import { NgModule, Optional, SkipSelf } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { throwIfAlreadyLoaded } from '@kixplat/utils';
import { KiCoreModule } from '@kixplat/web';

@NgModule({
  imports: [KiCoreModule, IonicModule.forRoot()]
})
export class KiIonicCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: KiIonicCoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'KiIonicCoreModule');
  }
}
