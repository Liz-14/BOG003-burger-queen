import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Options } from 'src/app/interfaces/menu.interface';
import { FireStoreService } from '../../core/shared/services/fire-store.service';
import { Orders } from '../../interfaces/orders.interface'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  costumerData!: Orders[];
  isCostumerInactive: boolean = true

  constructor( private orderService: FireStoreService, private router: Router ) { }

  ngOnInit(): void {
    this.getCustomerData();
  }

    getCustomerData(): void{
      this.orderService.getCustomerData$(this.orderService.currentID)
      .subscribe(
        response => {
          this.costumerData = response;
          this.isCostumerInactive = response.length !== 0 ? false : true
        },
        error => console.log('customer error: ', error)
      )
    }

    createOrder(order: Options[]):void{
      this.orderService.insertOrder(this.orderService.currentID, order)
      this.router.navigate(['home'])
    }
}
