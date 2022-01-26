import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.page.html',
  styleUrls: ['./my-details.page.scss'],
})
export class MyDetailsPage implements OnInit {
  myDetailsForm: FormGroup;
  constructor(formBuilder: FormBuilder, private dataService: DataService) {}

  async ngOnInit() {}
}
