import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public car_y : any= 0;
  public car_y1  : any = 0;
  public car_y2 : any= 0;
  public total1 : any= 594;
  public total2 : any= 20;
  public total3: any = 30;
  public total_price = 0;
  public total_price1 = 0;
  public total_price2 = 0;

  data:Array<any> = [ 1 , 2 , 3 , 4 ,5 ];
  constructor() { }

  ngOnInit(): void {
  }
  selected(){
    console.log(this.car_y);
    console.log(this.car_y1);
    console.log(this.car_y2);
    console.log("t1  ", this.total1);
    console.log("t2  ", this.total2);
    console.log("t3  ", this.total3);

     this.total_price = this.car_y *  this.total1;
    this.total_price1 = this.car_y1 * this.total2;
    this.total_price2 = this.car_y2 * this.total3;
    console.log("t1  ", this.total_price);
    console.log("t2  ", this.total_price1);
    console.log("t3  ", this.total_price2);
  
  }
}
