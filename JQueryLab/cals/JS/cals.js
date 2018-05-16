import $ from "jquery";
var Operators;
(function (Operators) {
    Operators[Operators["add"] = 0] = "add";
    Operators[Operators["minus"] = 1] = "minus";
    Operators[Operators["multiple"] = 2] = "multiple";
    Operators[Operators["divide"] = 3] = "divide";
})(Operators || (Operators = {}));
$("#cmdCalculate").click(function () {
    var x = $("#x").val();
    var y = $("#y").val();
    console.log("x : " + x);
    console.log("y : " + y);
    var i = "";
    i = $("#operator").val().toString();
    var op = Operators[i];
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
//# sourceMappingURL=cals.js.map