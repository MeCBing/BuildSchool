enum Operators{
    add,
    minus,
    multiple,
    divide,
}

interface ICalculator {
    x:number;
    y:number;
    calculate(op: Operators):number ;
}

class Calculator implements ICalculator{
    x:number;
    y:number;
    constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
    calculate(op:Operators):number{
        switch(op){
            case Operators.add:
                return eval(this.x+"+"+this.y);
            case Operators.minus:
                return eval(this.x+"-"+this.y);
            case Operators.multiple:
                return eval(this.x+"*"+this.y);
            case Operators.divide:
                return eval(this.x+"/"+this.y);
        }
    }
}