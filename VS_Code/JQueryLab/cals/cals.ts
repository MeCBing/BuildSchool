import $ from "jquery";
enum Operators {
	add,
	minus,
	multiple,
	divide
}

$("#cmdCalculate").click(function() {
    let x = $("#x").val();
	let y = $("#y").val();
    console.log("x : "+x);
    console.log("y : "+y);
    let i = "";
    i = $("#operator").val().toString();
	let op = Operators[i];
	
	switch (op) {
		case Operators.add:
  	$("#result").text(eval(x + "+" + y));
  	break;
		case Operators.minus:
  	$("#result").text(eval(x + "-" + y));
  	break;
		case Operators.multiple:
  	$("#result").text(eval(x + "*" + y));
  	break;
		case Operators.divide:
  	$("#result").text(eval(x + "/" + y));
  	break;
  
	}
});