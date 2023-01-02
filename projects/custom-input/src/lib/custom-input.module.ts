import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomInputComponent } from './custom-input.component';
import { MaskDirective } from './custom-input.directive';
import { MaskPipe } from './custom-input.pipe';



@NgModule({
  declarations: [
    CustomInputComponent,
    MaskDirective,
    MaskPipe
  ],
  imports: [
    FormsModule
  ],
  exports: [
    CustomInputComponent
  ]
})
export class CustomInputModule { }
