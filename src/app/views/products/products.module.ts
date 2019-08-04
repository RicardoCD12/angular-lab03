import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';

import { HoverDirective } from './shared/directves/hover.directive';
import { SortPipe } from './shared/pipes/sort.pipe';
import { ShortTextPipe } from './shared/pipes/short-text.pipe';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ListProductsComponent,
    HoverDirective,
    ShortTextPipe,
    CreateProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ListProductsComponent
  ],
  providers:[
    SortPipe
  ]
})
export class ProductsModule { }
