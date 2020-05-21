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
      14: ['', Validators.required],   
      
      21: ['', Validators.required],   
      22: ['', Validators.required],   
      23: ['', Validators.required],   
      24: ['', Validators.required],   
      
      31: ['', Validators.required],   
      32: ['', Validators.required],   
      33: ['', Validators.required],   
      34: ['', Validators.required],   
      
      41: ['', Validators.required],   
      42: ['', Validators.required],   
      43: ['', Validators.required],   
      44: ['', Validators.required],   
      
    });
  }

  calcular() {
    const v11 = this.calculoForm.get('11').value;
    const v12 = this.calculoForm.get('12').value;
    const v13 = this.calculoForm.get('13').value;
    const v14 = this.calculoForm.get('14').value;

    const v21 = this.calculoForm.get('21').value;
    const v22 = this.calculoForm.get('22').value;
    const v23 = this.calculoForm.get('23').value;
    const v24 = this.calculoForm.get('24').value;
    
    const v31 = this.calculoForm.get('31').value;
    const v32 = this.calculoForm.get('32').value;
    const v33 = this.calculoForm.get('33').value;
    const v34 = this.calculoForm.get('34').value;
    
    const v41 = this.calculoForm.get('41').value;
    const v42 = this.calculoForm.get('42').value;
    const v43 = this.calculoForm.get('43').value;
    const v44 = this.calculoForm.get('44').value;
    
    console.log(v11);
    console.log(v12);
    console.log(v13);
    console.log(v14);

    console.log(v21);
    console.log(v22);
    console.log(v23);
    console.log(v24);
    
    console.log(v31);
    console.log(v32);
    console.log(v33);
    console.log(v34);

    console.log(v41);
    console.log(v42);
    console.log(v43);
    console.log(v44);

    




    
    
    
    

  }

}
