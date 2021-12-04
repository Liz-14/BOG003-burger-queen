import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Orders } from 'src/app/interfaces/orders.interface';

@Injectable({
  providedIn: 'root'
})
export class InPreparationService {

  inPreparationData: Orders[] = [];

  private inPreparationSubject = new BehaviorSubject<Orders[]>([]);

  get finalPrepData$(): Observable<Orders[]> {
    return this.inPreparationSubject.asObservable();
  }

  addData(data: Orders): void{
    console.log(data);
    this.inPreparationData.push(data);
    this.inPreparationSubject.next(this.inPreparationData);
  }

  constructor() { }
}
