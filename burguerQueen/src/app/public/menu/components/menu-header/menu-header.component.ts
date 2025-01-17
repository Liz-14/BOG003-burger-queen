import { Component, OnInit, Input } from '@angular/core';
import { Orders } from 'src/app/interfaces/orders.interface';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {

  @Input() costumerData!: Orders[];

  constructor() { }

  ngOnInit(): void {
  }

}
