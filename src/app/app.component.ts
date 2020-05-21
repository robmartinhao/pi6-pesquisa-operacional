import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  calculoForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.calculoForm = this.formBuilder.group({
      11: ['', Validators.required],
      12: ['', Validators.required],
      13: ['', Validators.required],
      14: ['', Validators.required]   
      
    });
  }

}
