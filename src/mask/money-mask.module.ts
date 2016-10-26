import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MoneyMaskDirective } from './money-mask.directive';

@NgModule({
  declarations: [
    MoneyMaskDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: []
})
export class MoneyMaskModule { }
