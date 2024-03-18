import { Component } from '@angular/core';
import { ProductServiceService } from '../../service/product-service.service';
import { listOfProduct } from '../../model/product';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  data: any;
  productByName:any;
  constructor(private product: ProductServiceService) { }
  ngOnInit() {
    console.log(this.getProductTypes());

  }
  getProductTypes(): void {
    this.product.getProductTypes()
      .subscribe(
        (data: any[]) => {
          this.data= data;
          console.log('Product Types:', data);
        },
        error => {
          console.error('Error fetching product types:', error);
        }
      );
  }
  getProductBy(productName:string)
  {
    this.product.getProductByCategoryName(productName)
    .subscribe(
      (data: listOfProduct) => {
        this.productByName= data.products;
        console.log('Product Types:', data);
      },
      error => {
        console.error('Error fetching product types:', error);
      }
    );
  }

}
