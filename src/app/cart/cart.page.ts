import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CartService } from '../services/cart.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-cart',
  standalone:true,
  imports:[IonicModule ,NgFor],
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  items:any=[];

  constructor(private cart:CartService) { }

  ngOnInit(): void {

    this.items = this.cart.getItems();
    console.log(this.items);

  }


}
