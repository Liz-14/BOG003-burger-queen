import { Component, OnInit } from '@angular/core';
import { FireStoreService } from '../../core/shared/services/fire-store.service';
import { Orders } from '../../interfaces/orders.interface'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  custumerData!: Orders[];

  constructor( private orderService: FireStoreService ) { }

  ngOnInit(): void {
    this.orderService.getCustomerData(this.orderService.currentID);
    this.getCustomerData();
  }

    /*getCurrentId(): void{
      console.log(this.orderService.currentID)
    }*/

    getCustomerData(): void{
      this.orderService.customer$
      .subscribe(
        response => {
          this.custumerData = response;
          console.log('customer data: ', response);
        },
        error => console.log('customer error: ', error)
      )
    }

}
