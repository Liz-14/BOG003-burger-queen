import { Component, Input, OnInit } from '@angular/core';
import { Orders } from 'src/app/interfaces/orders.interface';

@Component({
  selector: 'app-preparations',
  templateUrl: './preparations.component.html',
  styleUrls: ['./preparations.component.css']
})
export class PreparationsComponent implements OnInit {

  @Input() item!: Orders;

  constructor() { }

  ngOnInit(): void {
  }
}
