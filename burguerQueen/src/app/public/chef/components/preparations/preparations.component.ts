import { Component, OnInit } from '@angular/core';
import { FireStoreService } from 'src/app/core/shared/services/fire-store.service';
import { InPreparationService } from 'src/app/core/shared/services/in-preparation.service';

@Component({
  selector: 'app-preparations',
  templateUrl: './preparations.component.html',
  styleUrls: ['./preparations.component.css']
})
export class PreparationsComponent implements OnInit {

  dataPreparation$ = this.preparation.finalPrepData$

  constructor(private orderService: FireStoreService, private preparation: InPreparationService) { }

  ngOnInit(): void {
  }
}
