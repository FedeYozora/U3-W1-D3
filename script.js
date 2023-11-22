var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UtileTasse = /** @class */ (function () {
    function UtileTasse(codredd, redditoannuolordo) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
    }
    return UtileTasse;
}());
var Lavoratore = /** @class */ (function (_super) {
    __extends(Lavoratore, _super);
    function Lavoratore(codredd, redditoannuolordo) {
        return _super.call(this, codredd, redditoannuolordo) || this;
    }
    Lavoratore.prototype.getUtileTasse = function () {
        return this.redditoannuolordo * 0.78;
    };
    Lavoratore.prototype.getTasseInps = function () {
        var tasseUtili = this.getUtileTasse();
        if (this.codredd === 1) {
            return tasseUtili * 0.25;
        }
        else if (this.codredd === 2) {
            return tasseUtili * 0.19;
        }
        else if (this.codredd === 3) {
            return tasseUtili * 0.35;
        }
        return 0;
    };
    Lavoratore.prototype.getTasseIrpef = function () {
        var tasseUtili = this.getUtileTasse();
        if (this.codredd === 1) {
            return tasseUtili * 0.05;
        }
        else if (this.codredd === 2) {
            return tasseUtili * 0.15;
        }
        else if (this.codredd === 3) {
            return tasseUtili * 0.15;
        }
        return 0;
    };
    Lavoratore.prototype.getRedditoAnnuoNetto = function () {
        return this.getUtileTasse() - this.getTasseIrpef() - this.getTasseInps();
    };
    return Lavoratore;
}(UtileTasse));
var Professionista = new Lavoratore(1, 100000);
var Artigiano = new Lavoratore(2, 100000);
var Commerciante = new Lavoratore(3, 100000);
// Console.log dei redditi annuali in base al lavoro
console.log("Reddito annuo netto del professionista: ", Professionista.getRedditoAnnuoNetto());
console.log("Reddito annuo netto dell'artigiano: ", Artigiano.getRedditoAnnuoNetto());
console.log("Reddito annuo netto del commerciante: ", Commerciante.getRedditoAnnuoNetto());
