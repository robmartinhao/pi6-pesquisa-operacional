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

    var linha1 = new Array(v11, v12, v13, v14);
    var linha2 = new Array(v21, v22, v23, v24);
    var linha3 = new Array(v31, v32, v33, v34);
    var linha4 = new Array(v41, v42, v43, v44);

    var tabelaCustoDeTransporte = new Array(linha1, linha2, linha3, linha4);

    const menorValorLinha1 = Math.min.apply(Math, linha1);
    console.log(menorValorLinha1);
    const menorValorLinha2 = Math.min.apply(Math, linha2);
    console.log(menorValorLinha2);
    const menorValorLinha3 = Math.min.apply(Math, linha3);
    console.log(menorValorLinha3);
    const menorValorLinha4 = Math.min.apply(Math, linha4);
    console.log(menorValorLinha4);
    console.log('\n\n\n');


    var menoresValoresDasLinhas = new Array(menorValorLinha1, menorValorLinha2, menorValorLinha3, menorValorLinha4);

    var tabelaDeCustoReduzida = new Array(linha1, linha2, linha3, linha4);

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        tabelaDeCustoReduzida[i][j] = tabelaDeCustoReduzida[i][j] - menoresValoresDasLinhas[i];
      }
    }

    //Apresentação
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        console.log(tabelaDeCustoReduzida[i][j]);
      }
      console.log('\n');
    }

    console.log('\n\n\n======================================================');

    var coluna1 = new Array();
    var coluna2 = new Array();
    var coluna3 = new Array();
    var coluna4 = new Array();

    for (let i = 0; i < 4; i++) {
      coluna1[i] = tabelaDeCustoReduzida[i][0];
    }
    for (let i = 0; i < 4; i++) {
      coluna2[i] = tabelaDeCustoReduzida[i][1];
    }
    for (let i = 0; i < 4; i++) {
      coluna3[i] = tabelaDeCustoReduzida[i][2];
    }
    for (let i = 0; i < 4; i++) {
      coluna4[i] = tabelaDeCustoReduzida[i][3];
    }

    const menorValorColuna1 = Math.min.apply(Math, coluna1);
    console.log(menorValorColuna1);
    const menorValorColuna2 = Math.min.apply(Math, coluna2);
    console.log(menorValorColuna2);
    const menorValorColuna3 = Math.min.apply(Math, coluna3);
    console.log(menorValorColuna3);
    const menorValorColuna4 = Math.min.apply(Math, coluna4);
    console.log(menorValorColuna4);
    console.log('\n\n\n');

    var menoresValoresDasColunas = new Array(menorValorColuna1, menorValorColuna2, menorValorColuna3, menorValorColuna4);
    console.log(menoresValoresDasColunas);

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        tabelaDeCustoReduzida[i][j] = tabelaDeCustoReduzida[i][j] - menoresValoresDasColunas[i];
      }
    }

    //Apresentação
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        console.log(tabelaDeCustoReduzida[i][j]);
      }
      console.log('\n');
    }

    console.log('\n\n\n======================================================');

    //Designação
    var tabelaDesignacao = tabelaDeCustoReduzida;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (tabelaDeCustoReduzida[i][j] == 0 && menoresValoresDasLinhas[i] == 0 && menoresValoresDasColunas[j] == 0) {
          tabelaDesignacao[i][j] = 1;
        }
      }
    }

    //Apresentação
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        console.log(tabelaDesignacao[i][j]);
      }
      console.log('\n');
    }


    var mostrarResultado = true;

  }

}
