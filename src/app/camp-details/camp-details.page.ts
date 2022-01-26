import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-camp-details',
  templateUrl: './camp-details.page.html',
  styleUrls: ['./camp-details.page.scss'],
})
export class CampDetailsPage implements OnInit {
  campDetailsForm: FormGroup;
  constructor(formBuilder: FormBuilder, private dataService: DataService) {}

  async ngOnInit() {}
}
