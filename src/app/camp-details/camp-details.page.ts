import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-camp-details',
  templateUrl: './camp-details.page.html',
  styleUrls: ['./camp-details.page.scss'],
})
export class CampDetailsPage implements OnInit {
  campDetailsForm: FormGroup;
  constructor(formBuilder: FormBuilder, private dataService: DataService) {
    this.campDetailsForm = formBuilder.group({
      gateAccessCode: [''],
      ammenitiesCode: [''],
      wifiPassword: [''],
      phoneNumber: [''],
      departure: [''],
      notes: [''],
    });
  }

  async ngOnInit() {
    this.campDetailsForm.valueChanges.pipe(debounceTime(1000)).subscribe(() => {
      // this.dataService.setMyDetails(this.campDetailsForm.value);
    });
  }
}
