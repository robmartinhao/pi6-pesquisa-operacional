import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  calculoForm: FormGroup;
  ocultarResultado: boolean = true;
  ocultarNaoHouveDesignacao: boolean = true;
  ocultarHouveDesignacao: boolean = true;

  cr11: number;
  cr12: number;
  cr13: number;
  cr14: number;

  cr21: number;
  cr22: number;
  cr23: number;
  cr24: number;

  cr31: number;
  cr32: number;
  cr33: number;
  cr34: number;

  cr41: number;
  cr42: number;
  cr43: number;
  cr44: number;

  dt11: number;
  dt12: number;
  dt13: number;
  dt14: number;

  dt21: number;
  dt22: number;
  dt23: number;
  dt24: number;

  dt31: number;
  dt32: number;
  dt33: number;
  dt34: number;

  dt41: number;
  dt42: number;
  dt43: number;
  dt44: number;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.ocultarResultado = true;
    this.ocultarHouveDesignacao = true;
    this.ocultarNaoHouveDesignacao = true;

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

      cr11: 0,
      cr12: 0,
      cr13: 0,
      cr14: 0,

      cr21: 0,
      cr22: 0,
      cr23: 0,
      cr24: 0,

      cr31: 0,
      cr32: 0,
      cr33: 0,
      cr34: 0,

      cr41: 0,
      cr42: 0,
      cr43: 0,
      cr44: 0,

      dt11: 0,
      dt12: 0,
      dt13: 0,
      dt14: 0,

      dt21: 0,
      dt22: 0,
      dt23: 0,
      dt24: 0,

      dt31: 0,
      dt32: 0,
      dt33: 0,
      dt34: 0,

      dt41: 0,
      dt42: 0,
      dt43: 0,
      dt44: 0
    });
  }

  limpar(): void {
    window.location.reload();
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

    let linha1 = new Array(v11, v12, v13, v14);
    let linha2 = new Array(v21, v22, v23, v24);
    let linha3 = new Array(v31, v32, v33, v34);
    let linha4 = new Array(v41, v42, v43, v44);

    let menorValorLinha1 = Math.min.apply(Math, linha1);
    let menorValorLinha2 = Math.min.apply(Math, linha2);
    let menorValorLinha3 = Math.min.apply(Math, linha3);
    let menorValorLinha4 = Math.min.apply(Math, linha4);

    let menoresValoresDasLinhas = new Array(menorValorLinha1, menorValorLinha2, menorValorLinha3, menorValorLinha4);
    let tabelaDeCustoReduzida = new Array(linha1, linha2, linha3, linha4);

    tabelaDeCustoReduzida = this.subtraiMenorValorDeCadaLinha(tabelaDeCustoReduzida, menoresValoresDasLinhas);

    let coluna1 = new Array();
    let coluna2 = new Array();
    let coluna3 = new Array();
    let coluna4 = new Array();

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
    const menorValorColuna2 = Math.min.apply(Math, coluna2);
    const menorValorColuna3 = Math.min.apply(Math, coluna3);
    const menorValorColuna4 = Math.min.apply(Math, coluna4);

    var menoresValoresDasColunas = new Array(menorValorColuna1, menorValorColuna2, menorValorColuna3, menorValorColuna4);

    tabelaDeCustoReduzida = this.subtraiMenorValorDeCadaColuna(tabelaDeCustoReduzida, menoresValoresDasColunas);

    this.cr11 = tabelaDeCustoReduzida[0][0];
    this.cr12 = tabelaDeCustoReduzida[0][1];
    this.cr13 = tabelaDeCustoReduzida[0][2];
    this.cr14 = tabelaDeCustoReduzida[0][3];

    this.cr21 = tabelaDeCustoReduzida[1][0];
    this.cr22 = tabelaDeCustoReduzida[1][1];
    this.cr23 = tabelaDeCustoReduzida[1][2];
    this.cr24 = tabelaDeCustoReduzida[1][3];

    this.cr31 = tabelaDeCustoReduzida[2][0];
    this.cr32 = tabelaDeCustoReduzida[2][1];
    this.cr33 = tabelaDeCustoReduzida[2][2];
    this.cr34 = tabelaDeCustoReduzida[2][3];

    this.cr41 = tabelaDeCustoReduzida[3][0];
    this.cr42 = tabelaDeCustoReduzida[3][1];
    this.cr43 = tabelaDeCustoReduzida[3][2];
    this.cr44 = tabelaDeCustoReduzida[3][3];

    let tabelaDesignacao = new Array(new Array(0, 0, 0, 0), new Array(0, 0, 0, 0), new Array(0, 0, 0, 0), new Array(0, 0, 0, 0));

    tabelaDesignacao = this.calculaDesignacao(tabelaDeCustoReduzida);

    this.dt11 = tabelaDesignacao[0][0];
    this.dt12 = tabelaDesignacao[0][1];
    this.dt13 = tabelaDesignacao[0][2];
    this.dt14 = tabelaDesignacao[0][3];

    this.dt21 = tabelaDesignacao[1][0];
    this.dt22 = tabelaDesignacao[1][1];
    this.dt23 = tabelaDesignacao[1][2];
    this.dt24 = tabelaDesignacao[1][3];

    this.dt31 = tabelaDesignacao[2][0];
    this.dt32 = tabelaDesignacao[2][1];
    this.dt33 = tabelaDesignacao[2][2];
    this.dt34 = tabelaDesignacao[2][3];

    this.dt41 = tabelaDesignacao[3][0];
    this.dt42 = tabelaDesignacao[3][1];
    this.dt43 = tabelaDesignacao[3][2];
    this.dt44 = tabelaDesignacao[3][3];

    this.verificaDesignacao(tabelaDesignacao);

    this.mostrar();
  }

  subtraiMenorValorDeCadaLinha(tabelaDeCustoReduzida: any[][], menoresValoresDasLinhas: any[]) {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        tabelaDeCustoReduzida[i][j] = tabelaDeCustoReduzida[i][j] - menoresValoresDasLinhas[i];
      }
    }
    return tabelaDeCustoReduzida;
  }

  subtraiMenorValorDeCadaColuna(tabelaDeCustoReduzida: any[][], menoresValoresDasColunas: any[]) {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        tabelaDeCustoReduzida[j][i] = tabelaDeCustoReduzida[j][i] - menoresValoresDasColunas[i];
      }
    }
    return tabelaDeCustoReduzida;
  }

  calculaDesignacao(tabelaDeCustoReduzida: any[][]) {

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (tabelaDeCustoReduzida[i][j] == 0) {
          tabelaDeCustoReduzida[i][j] = 'x';
        }
      }
    }

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (tabelaDeCustoReduzida[i][j] == 'x') {

          for (let k = 0; k < 4; k++) {
            tabelaDeCustoReduzida[i][k] = 0;
          }
          tabelaDeCustoReduzida[i][j] = 1;

          for (let l = 0; l < 4; l++) {
            tabelaDeCustoReduzida[l][j] = 0;
          }
          tabelaDeCustoReduzida[i][j] = 1;

        }
      }
    }
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (tabelaDeCustoReduzida[i][j] !== 0 && tabelaDeCustoReduzida[i][j] !== 1) {
          tabelaDeCustoReduzida[i][j] = 0;
        }
      }
    }
    return tabelaDeCustoReduzida;
  }

  verificaDesignacao(tabelaDesignacao: any[][]) {
    let count = 0;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (tabelaDesignacao[i][j] == 1) {
          count++;
        }
      }
    }
    if (count == 4) {
      this.ocultarHouveDesignacao = false;
      this.ocultarNaoHouveDesignacao = true;

    } else {
      this.ocultarNaoHouveDesignacao = false;
      this.ocultarHouveDesignacao = true;
    }
  }

  mostrar() {
    this.ocultarResultado = false;
  }
}