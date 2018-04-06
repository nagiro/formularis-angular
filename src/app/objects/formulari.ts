export class DadesBroma {
  e = `
  {
    "PantallaActual": 1,
    "LlistaPantalles" :
    [
        {
            "NumPantalla": 1,
            "Ordre": 1,
            "BlocActual": 1,
            "TitolBloc": "Titol del bloc",
            "LlistaBlocs":
            [
                {
                    "NumBloc": 1,
                    "Ordre": 1,
                    "Mode" : "SinglePage",
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
        },
        {
          "NumPantalla": 2,
          "Ordre": 2,
          "BlocActual": 1,
          "TitolBloc": "Titol del bloc",
          "LlistaBlocs":
          [
              {
                  "NumBloc": 1,
                  "Ordre": 1,
                  "Mode" : "SinglePage",
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
  public static Input = 0;
  public static Select = 1;
  public static Date = 2;
  public static Button = 3;
  public static Upload = 4;
  public static MultipleSelect2 = 5;
  tipus = 0;
  constructor(T?: number) {
    if (T) {
      this.tipus = T;
    }
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

  constructor(c?: any) {
    if (c) {
      this.Tipus = new TipusCamps(c.Tipus);
      this.Col = c.Col;
      this.Text = c.Text;
      this.Subtext = c.Subtext;
      this.Obligatori = false;
      this.Validacio = new ValidacioField(c.Validacio);
      this.Nom = c.Nom;
    }
  }

}

export class CampInput extends Camp {
  MaxCaracters = 100;
  constructor(c: any) {
    super(c);
    this.MaxCaracters = c.MaxCaracters;
  }
}

export class CampSelect extends Camp {
  Options: KeyValueArray = new KeyValueArray();

  constructor(c: any) {
    super(c);
    for ( const O of c.Options ) { this.Options.add(O); }
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
  Ordre: 0;
  LlistaCamps: Camp[] = [];
  TitolBloc: string;
  TipusBloc: TipusBloc = new TipusBloc();

  constructor(bloc: any) {
    this.NumBloc = bloc.NumBloc;
    this.Ordre = bloc.Ordre;
    this.TitolBloc = bloc.TitolBloc;
    this.TipusBloc = new TipusBloc( bloc.TipusBloc );
    for (const camp of bloc.LlistaCamps) {
      switch (camp.Tipus) {
        case TipusCamps.Input: { this.LlistaCamps.push( new CampInput(camp) );  break; }
        case TipusCamps.Select: { this.LlistaCamps.push( new CampSelect(camp) ); break; }
      }
    }

  }
}

export class Pantalla {
  NumPantalla = 0;
  Ordre = 0;
  LlistaBlocs: Bloc[] = [];
  BlocActual = 0;

  constructor(pantalla: any) {
    this.NumPantalla = pantalla.NumPantalla;
    this.Ordre = pantalla.Ordre;
    this.BlocActual = pantalla.BlocActual;
    for (const bloc of pantalla.LlistaBlocs) {
      this.LlistaBlocs.push( new Bloc(bloc) );
    }
  }

}

export class Formulari {
    LlistaPantalles: Pantalla[] = [];
    PantallaActual: 0;

    constructor(formulari?: any) {
      if (formulari) {
        this.PantallaActual = formulari.PantallaActual;
        for (const pantalla of formulari.LlistaPantalles) {
          this.LlistaPantalles.push( new Pantalla(pantalla) );
        }
      }
    }
}

export class Test {
  constructor() {

  }
}
