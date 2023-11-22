document.getElementById("redditoProfForm")!.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting normally
  const redditoInput = document.getElementById("redditoProfInput")! as HTMLInputElement;
  const redditoPro = document.getElementById("redditoPro")! as HTMLElement;
  const redditoannuolordo = parseInt(redditoInput.value);

  const Professionista = new Lavoratore(1, redditoannuolordo);
  redditoPro.innerHTML = `<p>Il reddito annuo del professionista é di ${Professionista.getRedditoAnnuoNetto()}€</p>`;
});
document.getElementById("redditoArtForm")!.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting normally
  const redditoInput = document.getElementById("redditoArtInput")! as HTMLInputElement;
  const redditoArt = document.getElementById("redditoArt")! as HTMLElement;
  const redditoannuolordo = parseInt(redditoInput.value);

  const Artigiano = new Lavoratore(2, redditoannuolordo);
  redditoArt.innerHTML = `<p>Il reddito annuo dell'artigiano é di ${Artigiano.getRedditoAnnuoNetto()}€</p>`;
});
document.getElementById("redditoComForm")!.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting normally
  const redditoInput = document.getElementById("redditoComInput")! as HTMLInputElement;
  const redditoCom = document.getElementById("redditoCom")! as HTMLElement;
  const redditoannuolordo = parseInt(redditoInput.value);

  const Commerciante = new Lavoratore(3, redditoannuolordo);
  redditoCom.innerHTML = `<p>Il reddito annuo del commerciante é di ${Commerciante.getRedditoAnnuoNetto()}€</p>`;
});

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
