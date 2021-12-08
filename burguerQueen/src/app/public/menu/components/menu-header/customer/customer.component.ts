import { Component, OnInit, Input } from '@angular/core';
import { Orders } from 'src/app/interfaces/orders.interface';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  @Input() el!: Orders;

  constructor() { }

  ngOnInit(): void {
  }

}
