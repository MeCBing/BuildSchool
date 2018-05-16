abstract class TaxCalculator {	
    protected _taxRate: number;  
    constructor(taxRate: number) {
        this._taxRate = taxRate;
    }
    abstract getAmount(amount: number): number;
  }
  
  class TaxCalculatorLv1 extends TaxCalculator {	
      constructor() { super(0.08); }
      getAmount(amount: number): number {
          return this._taxRate * amount;
      }
  }
  
  class TaxCalculatorLv2 extends TaxCalculator {	
      constructor() { super(0.1); }
      getAmount(amount: number): number {
          return (this._taxRate * amount) - 100000;
      }
  }


let t1 = new TaxCalculatorLv1();
let t2 = new TaxCalculatorLv2();

console.log(t1.getAmount(1000000));
console.log(t2.getAmount(5000000));