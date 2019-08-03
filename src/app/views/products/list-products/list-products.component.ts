import { Component, OnInit } from '@angular/core';
import Product from '../product.model';
import { SortPipe } from '../shared/pipes/sort.pipe';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  allProducts: Product[] = [
    {id:101, name:'Arroz con pollo'},
    {id:102, name:'Ají de gallina'},
    {id:103, name:'Chaufa de mariscos'},
    {id:104, name:'Arroz a la Cubana'}
  ];

  constructor(private sortPipe: SortPipe) { }

  ngOnInit() {
  }

  onSort(value: string){
    this.sortPipe.transform(
      this.allProducts,
      value
    );
  }
  
  onRemove(id: number){
    this.sortPipe
    this.allProducts = this.allProducts.filter(prod => prod.id !== id); 
  }
}
