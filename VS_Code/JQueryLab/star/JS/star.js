var NumerologyCalculator = (function () {
    function NumerologyCalculator(y, m, d) {
        this.year = y;
        this.month = m;
        this.day = d;
    }
    NumerologyCalculator.prototype.getLifeNumerology = function () {
        var str = this.year.toString() + this.month.toString() + this.day.toString();
        return this.getLife(str);
    };
    NumerologyCalculator.prototype.getAstrologyConstellationName = function () {
        return this.getAstrology(this.month, this.day);
    };
    NumerologyCalculator.prototype.getLife = function (str) {
        var num = 0;
        var sp = str.split("");
        for (var i = 0; i < sp.length; i++) {
            num += parseInt(sp[i]);
        }
        if (num > 9) {
            num = this.getLife(num.toString());
        }
        return num;
    };
    NumerologyCalculator.prototype.getAstrology = function (month, day) {
        var b = eval(month + "." + day);
        var s;
        console.log(b);
        if (b >= 1.20 && b < 2.18) {
            return "aquarius.json";
        }
        else if (b >= 2.20 && b < 3.21) {
            return "pisces.json";
        }
        else if (b >= 3.21 && b < 4.21) {
            return "aries.json";
        }
        else if (b >= 4.21 && b < 5.22) {
            return "taurus.json";
        }
        else if (b >= 5.22 && b < 6.22) {
            return "gemini.json";
        }
        else if (b >= 6.22 && b < 7.22) {
            return "cancer.json";
        }
        else if (b >= 7.22 && b < 8.24) {
            return "leo.json";
        }
        else if (b >= 8.24 && b < 9.24) {
            return "virgo.json";
        }
        else if (b >= 9.24 && b < 10.24) {
            return "libra.json";
        }
        else if (b >= 10.24 && b < 11.23) {
            return "scorpio.json";
        }
        else if (b >= 11.23 && b < 12.22) {
            return "sagittarius.json";
        }
        else if (b >= 12.22 || b < 1.20) {
            return "capricorn.json";
        }
    };
    return NumerologyCalculator;
}());
//# sourceMappingURL=star.js.map