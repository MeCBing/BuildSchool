var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TaxCalculator = (function () {
    function TaxCalculator(taxRate) {
        this._taxRate = taxRate;
    }
    return TaxCalculator;
}());
var TaxCalculatorLv1 = (function (_super) {
    __extends(TaxCalculatorLv1, _super);
    function TaxCalculatorLv1() {
        return _super.call(this, 0.08) || this;
    }
    TaxCalculatorLv1.prototype.getAmount = function (amount) {
        return this._taxRate * amount;
    };
    return TaxCalculatorLv1;
}(TaxCalculator));
var TaxCalculatorLv2 = (function (_super) {
    __extends(TaxCalculatorLv2, _super);
    function TaxCalculatorLv2() {
        return _super.call(this, 0.1) || this;
    }
    TaxCalculatorLv2.prototype.getAmount = function (amount) {
        return (this._taxRate * amount) - 100000;
    };
    return TaxCalculatorLv2;
}(TaxCalculator));
var t1 = new TaxCalculatorLv1();
var t2 = new TaxCalculatorLv2();
console.log(t1.getAmount(1000000));
console.log(t2.getAmount(5000000));
//# sourceMappingURL=abs.js.map