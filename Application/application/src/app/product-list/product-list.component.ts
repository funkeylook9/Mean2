import { Component, OnInit } from '@angular/core';
import { ProdctService } from '../Services/prodct.service';

import { Products } from '../Models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  Products: any[] = [];

  page: any = 1;
  totalLimit: any = 5;
  TotalRecord: any = 0;
  totalPages: number = 0;
  totalItems:any = 11;
  constructor(private Product: ProdctService) { }

  ngOnInit(): void {
    this.getProduct();
    
  }

 

  getProduct() {
    this.Product.getProduct().subscribe((data: any) => {
      this.Products = data
      console.log(this.Products);

    },
      (error: any) => {
        alert('error During Get Product Data')
      })
  };

  NextPage(page:any) {
    this.page = page;
    this.getProduct();
  }

}
