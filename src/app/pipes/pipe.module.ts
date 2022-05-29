import { NgModule } from '@angular/core';
import { HourTimePipe } from './hour.pipe';

@NgModule({
  imports: [
    // dep modules
  ],
  declarations: [ 
    HourTimePipe
  ],
  exports: [
    HourTimePipe
  ]
})
export class ApplicationPipesModule {}