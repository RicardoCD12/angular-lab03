import { Route } from '@angular/router';
import { ListProductsComponent } from './views/products/list-products/list-products.component';
import { CreateProductComponent } from './views/products/create-product/create-product.component';
import { EditProductComponent } from './views/products/edit-product/edit-product.component';

export const routes: Route[] = [
    {path: 'products', component: ListProductsComponent},
    {path: 'products/create', component: CreateProductComponent},
    {path: 'products/:id', component: EditProductComponent},
    {path: '', redirectTo: 'products', pathMatch: 'full'}

]