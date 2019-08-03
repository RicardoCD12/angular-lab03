import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';

import { HoverDirective } from './shared/directves/hover.directive';
import { SortPipe } from './shared/pipes/sort.pipe';
import { ShortTextPipe } from './shared/pipes/short-text.pipe';

@NgModule({
  declarations: [
    ListProductsComponent,
    HoverDirective,
    ShortTextPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListProductsComponent
  ],
  providers:[
    SortPipe
  ]
})
export class ProductsModule { }
