import { Component, OnInit } from '@angular/core';
import { FireStoreService } from 'src/app/core/shared/services/fire-store.service';
import { InPreparationService } from 'src/app/core/shared/services/in-preparation.service';
import { Orders } from 'src/app/interfaces/orders.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  arrayData!: Orders[];

  constructor(private orderService: FireStoreService, private preparation: InPreparationService) { }

  ngOnInit(): void {
    this.getDataOrders();
  }

  getDataOrders(): void{     
    this.orderService.dataOrders$
    .subscribe(
      response => {
       this.arrayData = response;

      },
      error => console.log(error)
    )
  }

  onClick(item: any): void{
    this.preparation.addData(item)
  }

}
