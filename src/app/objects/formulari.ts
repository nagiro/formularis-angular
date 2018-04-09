export class DadesBroma {
  b = `
  {
    "PantallaActual": 1,
    "LlistaPantalles" :
    [
        {
            "NumPantalla": 1,
            "Ordre": 1,
            "BlocActual": 1,
            "TitolPantalla": "Titol de la pantalla 1",
            "NomPantalla": "P1",
            "LlistaBlocs":
            [
                {
                    "NumBloc": 1,
                    "Ordre": 1,
                    "TitolBloc": "Títol del bloc 1",
                    "Mode" : "SinglePage",
                    "NomBloc": "P1_B1",
                    "LlistaCamps": [
                        {   "Tipus": 0, "Col": 3, "Text": "Som la polla", "Subtext": "Som la polla en vinagre", "Obligatori": true,
                            "Validacio": { "tipus": "regexp", "valor": "99999999A" }
                        },
                        {
                            "Tipus": 1, "Col": 3, "Text": "Som la polla", "Subtext": "Som la polla en vinagre", "Obligatori": false,
                            "Validacio": { "tipus": "regexp", "valor": "99999999A" },
                            "Options": [{ "key": "1", "value": "1" }, { "key": "1", "value": "1" }]
                        },
                        {
                            "Tipus": "MultiplSelect1", "Col": 12, "Text": "Som la polla2", "SubText": "", "Obligatori": true,
                            "Validacio" : { "Tipus": "function", "Valor": "ValidaMultiple1" },
                            "Options":   [
                                            { "key": "1", "value": [ {"key": "1", "value": "A"},{"key": "2", "value": "B"} ] },
                                            { "key": "2", "value": [ {"key": "1", "value": "C"},{"key": "2", "value": "D"} ] }
                                        ]
                        }
                    ]
                },
                {
                  "NumBloc": 2,
                  "Ordre": 2,
                  "TitolBloc": "Títol del bloc 1_2",
                  "Mode" : "SinglePage",
                  "NomBloc": "P1_B2",
                  "LlistaCamps": [
                      {   "Tipus": 0, "Col": 3, "Text": "Som la polla 1_2", "Subtext": "Som la polla en vinagre", "Obligatori": false,
                          "Validacio": { "tipus": "regexp", "valor": "99999999A" }
                      },
                      {
                          "Tipus": 1, "Col": 3, "Text": "Som la polla 1_2", "Subtext": "Som la polla en vinagre", "Obligatori": false,
                          "Validacio": { "tipus": "regexp", "valor": "99999999A" },
                          "Options": [{ "key": "1", "value": "1" }, { "key": "1", "value": "1" }]
                      },
                      {
                          "Tipus": "MultiplSelect1", "Col": 12, "Text": "Som la polla2", "SubText": "", "Obligatori": true,
                          "Validacio" : { "Tipus": "function", "Valor": "ValidaMultiple1" },
                          "Options":   [
                                          { "key": "1", "value": [ {"key": "1", "value": "A"},{"key": "2", "value": "B"} ] },
                                          { "key": "2", "value": [ {"key": "1", "value": "C"},{"key": "2", "value": "D"} ] }
                                      ]
                      }
                  ]
              }

            ]
        },
        {
          "NumPantalla": 2,
          "Ordre": 2,
          "BlocActual": 1,
          "TitolPantalla": "Titol de la pantalla 2",
          "NomPantalla":"P2",
          "LlistaBlocs":
          [
              {
                  "NumBloc": 1,
                  "Ordre": 1,
                  "Mode" : "SinglePage",
                  "TitolBloc": "Títol del bloc 2",
                  "NomBloc": "P2_B1",
                  "LlistaCamps": [
                      {   "Tipus": 0, "Col": 3, "Text": "Som la polla", "Subtext": "Som la polla en vinagre", "Obligatori": false,
                          "Validacio": { "tipus": "regexp", "valor": "99999999A" }
                      },
                      {
                          "Tipus": 1, "Col": 3, "Text": "Som la polla", "Subtext": "Som la polla en vinagre", "Obligatori": false,
                          "Validacio": { "tipus": "regexp", "valor": "99999999A" },
                          "Options": [{ "key": "1", "value": "1" }, { "key": "1", "value": "1" }]
                      },
                      {
                          "Tipus": "MultiplSelect1", "Col": 12, "Text": "Som la polla2", "SubText": "", "Obligatori": true,
                          "Validacio" : { "Tipus": "function", "Valor": "ValidaMultiple1" },
                          "Options":   [
                                          { "key": "1", "value": [ {"key": "1", "value": "A"},{"key": "2", "value": "B"} ] },
                                          { "key": "2", "value": [ {"key": "1", "value": "C"},{"key": "2", "value": "D"} ] }
                                      ]
                      }
                  ]
              }
          ]
      }
    ]
}
  `;



e = `

{
  "PantallaActual": 1,
  "LlistaPantalles" :
  [
      {
          "NumPantalla": 1,
          "SeguentPantalla": 2,
          "BlocActual": 1,
          "TitolPantalla": "Casal i participants",
          "NomPantalla": "Tipus_Casal_Inscripcions",
          "LlistaBlocs":
          [
              {
                  "NumBloc": 1,
                  "SeguentBloc": 1,
                  "Ordre": 1,
                  "TitolBloc": "Tipus de casal i inscripcion",
                  "Mode" : "SinglePage",
                  "NomBloc": "TipusCasalInscripcions",
                  "LlistaCamps": [
                      {
                          "Tipus": 1, "Col": 3, "Text": "Casal*", "Subtext": "", "Obligatori": true,
                          "Validacio": {},
                          "Options": [{ "key": "1", "value": "Casal d'estiu" }, { "key": "2", "value": "Escola esportiva" }]
                      },
                      {
                          "Tipus": 1, "Col": 3, "Text": "Número de participants*", "Subtext": "", "Obligatori": true,
                          "Validacio": {},
                          "Options": [{ "key": "1", "value": "1 alumne" }, { "key": "2", "value": "2 alumnes" }, { "key": "3", "value": "3 alumnes" }, { "key": "4", "value": "4 alumnes" }]
                      }
                  ]
              }
          ]
      },
      {
          "NumPantalla": 2,
          "SegPantalla": 1,
          "BlocActual": 1,
          "TitolPantalla": "Dades participants",
          "NomPantalla": "Dades_ParticipantsPagina",
          "LlistaBlocs":
          [
              {
                  "NumBloc": 1,
                  "SeguentBloc": 1,
                  "TitolBloc": "Dades participant",
                  "Mode" : "SinglePage",
                  "NomBloc": "DadesParticipantsBloc",
                  "LlistaCamps": [
                      {   "Tipus": 0, "Col": 3, "Text": "Nom*", "Subtext": "", "Obligatori": true, "Validacio": {} },
                      {   "Tipus": 0, "Col": 3, "Text": "Cognoms*", "Subtext": "", "Obligatori": true, "Validacio": {} },
                      {
                          "Tipus": 1, "Col": 3, "Text": "Sexe*", "Subtext": "", "Obligatori": true,
                          "Validacio": {},
                          "Options": [{ "key": "Nen", "value": "Nen" }, { "key": "Nena", "value": "Nena" }]
                      },
                      {   "Tipus": 0, "Col": 3, "Text": "Data de naixement*", "Subtext": "", "Obligatori": true,
                          "Validacio": { "tipus": "regexp", "valor": ["#\\\\d","#\\\\d", "/", "#\\\\d","#\\\\d", "/", "#\\\\d","#\\\\d","#\\\\d","#\\\\d"] }
                      },
                      {
                          "Tipus": 1, "Col": 3, "Text": "Curs escolar*", "Subtext": "", "Obligatori": true,
                          "Validacio": {},
                          "Options": [{ "key": "P3", "value": "P3" }, { "key": "P4", "value": "P4" }]
                      },
                      {   "Tipus": 0, "Col": 3, "Text": "Escola*", "Subtext": "", "Obligatori": true, "Validacio": {}}
                  ]
              }
          ]
      }
  ]
}

`;
}

export class KeyValue {
  key = '';
  value = '';
  constructor( key? , value? ) {
    if (key) { this.key = key; }
    if (value) { this.value = value; }
  }
}
export class KeyValueArray {
  Options: KeyValue[] = [];

  add(O: KeyValue) {
    this.Options.push(new KeyValue(O.key, O.value));
  }

  getOptions() {
    return this.Options;
  }
}

export class ValidacioField {
  tipus: string;
  valor: string;
  constructor(V?: any) {
    if (V) {
      this.tipus = V.tipus;
      this.valor = V.valor;
    }
  }
}

export class TipusCamps {
  public static ConstTipus = ['input', 'select', 'date', 'button', 'upload', 'multiple_select2'];

  tipus = 0;
  constructor(T?: number) {
    if (T) {
      this.tipus = T;
    }
  }

  getTipus() { return this.tipus; }

  getTipusConstId( s: string ) {
    const I = TipusCamps.ConstTipus.findIndex(X => X === s);
    if ( I < 0 ) { throw new Error('No he trobat el tipus de camp'); } else { return I; }
  }


}

export class Camp {

  Tipus = new TipusCamps();
  Col = 1;
  Text = '';
  Subtext = '';
  Obligatori = false;
  Validacio = new ValidacioField();
  Nom: string;
  Valor: any;
  ValidaOK = true;
  ErrorString = '';

  constructor(c?: any) {
    if (c) {
      this.Tipus = new TipusCamps(c.Tipus);
      this.Col = c.Col;
      this.Text = c.Text;
      this.Subtext = c.Subtext;
      this.Obligatori = c.Obligatori;
      this.Validacio = new ValidacioField(c.Validacio);
      this.Nom = c.Nom;
    }
  }

  // El camp sempre retorna cert. Quan apliquem un tipus és quan mirem.
  doValida(): boolean {
    const ErrorRequired = (this.Obligatori && !this.Valor);
    if ( ErrorRequired ) {
      this.ErrorString = 'El camp és obligatori.';
    }
    this.ValidaOK = !ErrorRequired;
    return this.ValidaOK;
  }

}

export class CampInput extends Camp {
  MaxCaracters = 100;
  constructor(c?: any) {
    super(c);
    if (c) {
      this.MaxCaracters = c.MaxCaracters;
    }
  }

}

export class CampSelect extends Camp {
  Options: KeyValueArray = new KeyValueArray();

  constructor(c?: any) {
    super(c);
    if (c) {
      for ( const O of c.Options ) { this.Options.add(O); }
    }
  }

}
export class CampDate extends Camp {}
export class CampButton extends Camp {}
export class CampMultipleSelect2 extends Camp {
  Options: KeyValueArray = new KeyValueArray();
}


export class TipusBloc {
  public static Form = 0;
  public static Taula = 1;
  tipus = 0;
  constructor(T?: number) { if (T) { this.tipus = T; } }

}

export class Bloc {
  NumBloc: 0;
  SeguentBloc: 0;
  LlistaCamps: Camp[] = [];
  TitolBloc: string;
  TipusBloc: TipusBloc = new TipusBloc();
  NomBloc: string;
  ValidaOK = true;

  constructor(bloc?: any) {
    if (bloc) {
      this.NumBloc = bloc.NumBloc;
      this.SeguentBloc = bloc.SeguentBloc;
      this.TitolBloc = bloc.TitolBloc;
      this.TipusBloc = new TipusBloc( bloc.TipusBloc );
      this.NomBloc = bloc.NomBloc;
      for (const camp of bloc.LlistaCamps) {
        const C = new Camp();
        switch (camp.Tipus) {
          case C.Tipus.getTipusConstId('input'): { this.LlistaCamps.push( new CampInput(camp) );  break; }
          case C.Tipus.getTipusConstId('select'): { this.LlistaCamps.push( new CampSelect(camp) ); break; }
        }
      }
    }
  }

  doValida() {
    this.ValidaOK = true;
    this.LlistaCamps.forEach( C => {
       if (!C.doValida()) { this.ValidaOK = false; }
    });
    return this.ValidaOK;
  }
}

export class Pantalla {
  NumPantalla = 0;
  SeguentPantalla = 0;
  LlistaBlocs: Bloc[] = [];
  TitolPantalla: string;
  BlocActual = 0;
  NomPantalla = '';
  ValidaOK = false;

  constructor(pantalla?: any) {
    if (pantalla) {
      this.NumPantalla = pantalla.NumPantalla;
      this.SeguentPantalla = pantalla.SeguentPantalla;
      this.BlocActual = pantalla.BlocActual;
      this.TitolPantalla = pantalla.TitolPantalla;
      this.NomPantalla = pantalla.NomPantalla;
      for (const bloc of pantalla.LlistaBlocs) {
        this.LlistaBlocs.push( new Bloc(bloc) );
      }
    }
  }

  getBloc(numeroBloc) {
    return this.LlistaBlocs.find( X => X.NumBloc === numeroBloc );
  }

  doValida() {
    this.ValidaOK = true;
    this.LlistaBlocs.forEach( B => {
      if (!B.doValida()) { this.ValidaOK = false; }
    });
    return this.ValidaOK;
  }

}

export class Formulari {
    LlistaPantalles: Pantalla[] = [];
    PantallaActual = 0;
    FuncioValidacio: Function;
    FuncioAccions: Function;
    ValidaOK = true;

    constructor(formulari?: any) {
      if (formulari) {
        this.PantallaActual = formulari.PantallaActual;
        this.FuncioValidacio = new Function ('F', formulari.FuncioValidacio);
        this.FuncioAccions = new Function('F', formulari.FuncioAccions);
        for (const pantalla of formulari.LlistaPantalles) {
          this.LlistaPantalles.push( new Pantalla(pantalla) );
        }
      }
    }

    getPantalla(numeroPantalla) {
      return this.LlistaPantalles.find( X => X.NumPantalla === numeroPantalla );
    }

    doValida() {
      this.ValidaOK = true;
      this.LlistaPantalles.forEach( P => {
        if (!P.doValida()) { this.ValidaOK = false; }
      });
      if (this.ValidaOK) { this.ValidaOK = this.FuncioValidacio(this); }
      return this.ValidaOK;

    }

}

export class Test {
  constructor() {

  }
}
