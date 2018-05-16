import $ from "jquery";
var Operators;
(function (Operators) {
    Operators[Operators["add"] = 0] = "add";
    Operators[Operators["minus"] = 1] = "minus";
    Operators[Operators["multiple"] = 2] = "multiple";
    Operators[Operators["divide"] = 3] = "divide";
})(Operators || (Operators = {}));
$("#cmdCalculate").click(function () {
    var op = Operators[$("#operator").val().toString()];
    var x = parseInt($("#x").val().toString());
    var y = parseInt($("#y").val().toString());
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