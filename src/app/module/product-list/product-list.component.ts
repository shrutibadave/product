import { Component, Input } from '@angular/core';
import { ProductServiceService } from '../../service/product-service.service';
import { Product, listOfProduct } from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  @Input()
  data: any;
  constructor(private product: ProductServiceService) { }
  ngOnInit() {
    this.getProducts();
    console.log("Hi"+this.data);
  }
  getProducts(): void {
    this.product.getProducts()
      .subscribe(
        (data: listOfProduct) => {
          this.data = data.products;
          console.log('Product Types:', data.products);
        },
        error => {
          console.error('Error fetching product types:', error);
        }
      );
  }


}
