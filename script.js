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
document.getElementById("redditoProfForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var redditoInput = document.getElementById("redditoProfInput");
    var redditoPro = document.getElementById("redditoPro");
    var redditoannuolordo = parseInt(redditoInput.value);
    var Professionista = new Lavoratore(1, redditoannuolordo);
    redditoPro.innerHTML = "<p>Il reddito annuo del professionista \u00E9 di ".concat(Professionista.getRedditoAnnuoNetto(), "\u20AC</p>\n                          <p> di cui: ").concat(Professionista.getTasseInps(), "\u20AC dovuti in tasse all'INPS</p>\n                          <p> e ").concat(Professionista.getTasseIrpef(), "\u20AC all'IRPEF</p>");
});
document.getElementById("redditoArtForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var redditoInput = document.getElementById("redditoArtInput");
    var redditoArt = document.getElementById("redditoArt");
    var redditoannuolordo = parseInt(redditoInput.value);
    var Artigiano = new Lavoratore(2, redditoannuolordo);
    redditoArt.innerHTML = "<p>Il reddito annuo dell'artigiano \u00E9 di ".concat(Artigiano.getRedditoAnnuoNetto(), "\u20AC</p>\n                          <p> di cui: ").concat(Artigiano.getTasseInps(), "\u20AC dovuti in tasse all'INPS</p>\n                          <p> e ").concat(Artigiano.getTasseIrpef(), "\u20AC all'IRPEF</p>");
});
document.getElementById("redditoComForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var redditoInput = document.getElementById("redditoComInput");
    var redditoCom = document.getElementById("redditoCom");
    var redditoannuolordo = parseInt(redditoInput.value);
    var Commerciante = new Lavoratore(3, redditoannuolordo);
    redditoCom.innerHTML = "<p>Il reddito annuo del commerciante \u00E9 di ".concat(Commerciante.getRedditoAnnuoNetto(), "\u20AC</p>\n                          <p> di cui: ").concat(Commerciante.getTasseInps(), "\u20AC dovuti in tasse all'INPS</p>\n                          <p> e ").concat(Commerciante.getTasseIrpef(), "\u20AC all'IRPEF</p>");
});
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
