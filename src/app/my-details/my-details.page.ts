import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.page.html',
  styleUrls: ['./my-details.page.scss'],
})
export class MyDetailsPage implements OnInit {
  myDetailsForm: FormGroup;
  constructor(formBuilder: FormBuilder, private dataService: DataService) {
    this.myDetailsForm = formBuilder.group({
      carRegistration: [''],
      trailerRegistration: [''],
      trailerDimentions: [''],
      phoneNumber: [''],
      notes: [''],
    });
  }

  async ngOnInit() {
    this.myDetailsForm.valueChanges.pipe(debounceTime(1000)).subscribe(() => {
      // this.dataService.setMyDetails(this.myDetailsForm.value);
    });
  }
}
