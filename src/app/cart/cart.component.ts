import { Component, OnInit, Input } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cartContent;
  constructor(public cartService: CartServiceService) { }

  ngOnInit() {
  }

}
