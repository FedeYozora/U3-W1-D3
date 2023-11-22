abstract class UtileTasse {
  protected codredd: number;
  protected redditoannuolordo: number;
  protected tasseinps: number;
  protected tasseirpef: number;

  constructor(codredd: number, redditoannuolordo: number) {
    this.codredd = codredd;
    this.redditoannuolordo = redditoannuolordo;
  }

  abstract getUtileTasse(): number;
  abstract getTasseInps(): number;
  abstract getTasseIrpef(): number;
  abstract getRedditoAnnuoNetto(): number;
}

class Lavoratore extends UtileTasse {
  constructor(codredd: number, redditoannuolordo: number) {
    super(codredd, redditoannuolordo);
  }

  getUtileTasse() {
    return this.redditoannuolordo * 0.78;
  }

  getTasseInps() {
    const tasseUtili = this.getUtileTasse();

    if (this.codredd === 1) {
      return tasseUtili * 0.25;
    } else if (this.codredd === 2) {
      return tasseUtili * 0.19;
    } else if (this.codredd === 3) {
      return tasseUtili * 0.35;
    }
    return 0;
  }

  getTasseIrpef() {
    const tasseUtili = this.getUtileTasse();

    if (this.codredd === 1) {
      return tasseUtili * 0.05;
    } else if (this.codredd === 2) {
      return tasseUtili * 0.15;
    } else if (this.codredd === 3) {
      return tasseUtili * 0.15;
    }
    return 0;
  }

  getRedditoAnnuoNetto() {
    return this.getUtileTasse() - this.getTasseIrpef() - this.getTasseInps();
  }
}

const Professionista = new Lavoratore(1, 100000);
const Artigiano = new Lavoratore(2, 100000);
const Commerciante = new Lavoratore(3, 100000);

// Console.log dei redditi annuali in base al lavoro
console.log(
  "Reddito annuo netto del professionista: ",
  Professionista.getRedditoAnnuoNetto()
);
console.log(
  "Reddito annuo netto dell'artigiano: ",
  Artigiano.getRedditoAnnuoNetto()
);
console.log(
  "Reddito annuo netto del commerciante: ",
  Commerciante.getRedditoAnnuoNetto()
);
