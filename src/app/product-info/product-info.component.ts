import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import{Product} from '../viewmodel/Product';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  id!: string;
  constructor(private route: ActivatedRoute,private _ServiceclientService :DataService) { 
    this.route.queryParams.subscribe(params => {
     this.id = params['id'];

     this._ServiceclientService.getProductDetails(this.id).subscribe(
      data=>{
       this.productdetails=data.product
      }
    )
    })
  }
  productdetails!: Product;
  ngOnInit(): void {

  }

}